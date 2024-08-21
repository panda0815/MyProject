import { createContext, useState } from "react";
import { darkTheme } from "../components/Theme";
import { ThemeProvider } from "styled-components";

type ThemeContextType = {
  theme: any;
  setTheme: (t: any) => void;
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const CustomThemeContext = createContext<ThemeContextType>({
  theme: {},
  setTheme: () => {},
  currentTheme: "",
  setCurrentTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <CustomThemeContext.Provider
      value={{ theme, setTheme, currentTheme, setCurrentTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
