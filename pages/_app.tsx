import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}


// Removed incorrect '../styles/tailwind.css' import.
// Tailwind styles are already included via globals.css if configured in tailwind.config.js.
// This ensures Next.js finds the styles during build and applies them properly.
