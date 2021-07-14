import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CW Convites</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp