import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fun</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Fun" />
        <meta name="description" content="Fun" />
      </Head>
      <Header />
      <main className="container mx-auto px-2 md:px-8 my-2 md:py-4">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
