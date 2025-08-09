import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

// Added a background color and min-height to ensure styling looks consistent.
// This will help differentiate content visually and confirm Tailwind CSS is applying styles.
