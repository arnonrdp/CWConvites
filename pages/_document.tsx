import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#800000" />
          <meta name="msapplication-TileColor" content="#e6e7e8" />
          <meta name="theme-color" content="#ff0000" />

          <meta name="description" content="Papelaria personalizada para eventos, convites, caixas e acessórios para compor sua festa." />
          <meta property="og:locale" content="pt-br" />
          <meta property="og:type" content="portfolio" />
          <meta property="og:title" content="CW Convites" />
          <meta property="og:site_name" content="CW Convites" />
          <meta property="og:description" content="Papelaria personalizada para eventos, convites, caixas e acessórios para compor sua festa." />
          <meta property="og:url" content="https://www.cwconvites.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}