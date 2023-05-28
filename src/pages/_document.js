import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
  <link rel="stylesheet" href="path/to/custom.css"/>
  <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
