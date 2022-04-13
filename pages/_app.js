import '../styles/globals.css'
import { BlockchainProvider } from '../context/BlockchainContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://1weiej8pkpcq.usemoralis.com:2053/server'
      appId='tE9173H9v3siGBAOQmO0Wmsa2GrScwPaik1o4Gek'
    >
      <BlockchainProvider>
        <Component {...pageProps} />
      </BlockchainProvider>
    </MoralisProvider>
  )
}

export default MyApp
