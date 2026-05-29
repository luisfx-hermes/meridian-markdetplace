// Shared, framework-agnostic theme constants. Kept in a plain (non-"use client")
// module so the value can be read both by the client ThemeProvider and by the
// server-rendered ThemeScript (client-module exports become opaque references
// when imported into a Server Component, so the literal must live here).

export const THEME_STORAGE_KEY = "meridian-theme";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";
