import { createContext, useState } from "react";
import { darkTheme, lightTheme, Theme } from "../components/Theme";
import { ThemeProvider } from "styled-components";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const CustomThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
