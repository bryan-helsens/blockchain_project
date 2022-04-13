import '../styles/globals.css'
import { BlockchainProvider } from '../context/BlockchainContext'

function MyApp({ Component, pageProps }) {
  return (
    <BlockchainProvider>
      <Component {...pageProps} />
    </BlockchainProvider>
  )
}

export default MyApp
