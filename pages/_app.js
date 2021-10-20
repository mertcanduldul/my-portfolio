import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react"
import { CssBaseline } from '@nextui-org/react';
import Header from '../components/Header'
import Home from './index';
import Navigation from '../components/Navigation';

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