import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

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