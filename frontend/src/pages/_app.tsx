import { CustomThemeProvider } from "@/contexts/CustomThemeContext";
import { StoreProvider } from "@/contexts/StoreContext";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <StoreProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </StoreProvider>
    </CustomThemeProvider>
  );
}
