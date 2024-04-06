import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../src/components/Layout/Layout";
import { AuthProvider } from "../src/hooks/AuthProvider";

const theme = extendTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraBaseProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </AuthProvider>
  );
}

export default MyApp;
