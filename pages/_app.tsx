import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SiteContextProvider } from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SiteContextProvider >
      <Component {...pageProps} />
    </SiteContextProvider>
  )
}

export default MyApp
