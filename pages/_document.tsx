import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      data-theme='fantasy'
      className='min-h-screen h-full'>
      <Head />
      <body className='min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
