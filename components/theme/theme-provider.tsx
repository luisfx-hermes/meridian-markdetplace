"use client";

import * as React from "react";

import {
  type ResolvedTheme,
  type Theme,
  THEME_STORAGE_KEY,
} from "@/components/theme/constants";

export { THEME_STORAGE_KEY };
export type { ResolvedTheme, Theme };

interface ThemeContextValue {
  /** The user's chosen preference. */
  theme: Theme;
  /** The concrete theme currently applied to the document. */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyResolvedTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  // Keep native form controls / scrollbars in sync with the theme.
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] =
    React.useState<ResolvedTheme>("light");

  // Hydrate the chosen preference from storage once on mount. The inline
  // ThemeScript has already applied the correct class to <html> before paint,
  // so this only syncs React state — it does not cause a flash.
  React.useEffect(() => {
    let stored: Theme = "system";
    try {
      const value = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (value === "light" || value === "dark" || value === "system") {
        stored = value;
      }
    } catch {
      // Ignore storage access errors (e.g. privacy mode).
    }
    setThemeState(stored);
  }, []);

  // Resolve + apply whenever the preference changes, and follow the OS when the
  // preference is "system".
  React.useEffect(() => {
    const update = () => {
      const resolved = theme === "system" ? getSystemTheme() : theme;
      setResolvedTheme(resolved);
      applyResolvedTheme(resolved);
    };

    update();

    if (theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors.
    }
    setThemeState(next);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
