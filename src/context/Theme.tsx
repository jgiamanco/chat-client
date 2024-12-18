import { PropsWithChildren, useMemo } from "react";

import { SUPPORTED_THEMES, useTheme } from "../hooks";

import { ThemeContext } from "../hooks";

export const ThemeContextProvider = ({
  targetOrigin,
  children,
}: PropsWithChildren<{ targetOrigin: string }>) => {
  const theme = useTheme(targetOrigin);

  const value = useMemo(
    () => ({
      theme,
      themeClassName: SUPPORTED_THEMES[theme],
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
