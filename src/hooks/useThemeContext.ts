import { createContext, useContext } from "react";

import {
  DEFAULT_THEME,
  SUPPORTED_THEMES,
  Theme,
  ThemeClassName,
} from "../hooks";

export const ThemeContext = createContext<{
  theme: Theme;
  themeClassName: ThemeClassName;
}>({
  theme: DEFAULT_THEME,
  themeClassName: SUPPORTED_THEMES[DEFAULT_THEME],
});

export const useThemeContext = () => useContext(ThemeContext);
