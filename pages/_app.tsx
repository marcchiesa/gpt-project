import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

// Added "space-y-8" to main container to create vertical spacing between elements and remove visible \n characters.
