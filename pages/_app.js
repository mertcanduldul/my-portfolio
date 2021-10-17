import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react"
import { CssBaseline } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;