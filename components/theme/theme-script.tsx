import { THEME_STORAGE_KEY } from "./constants";

// Runs synchronously, before the page paints, to set the correct theme class on
// <html>. This prevents a light/dark "flash of incorrect theme" on first load
// and on hard refresh — important here because the site is statically exported
// (no server to read a cookie). Kept tiny and dependency-free.
const themeScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)};var p=localStorage.getItem(k);var sys=window.matchMedia("(prefers-color-scheme: dark)").matches;var dark=p==="dark"||((p===null||p==="system")&&sys);var r=document.documentElement;r.classList.toggle("dark",dark);r.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;

export function ThemeScript() {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
