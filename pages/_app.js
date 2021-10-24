import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react"
import { CssBaseline } from '@nextui-org/react';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;