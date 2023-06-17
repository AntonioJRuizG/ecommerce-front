import { CartContextProvider } from '@/context/CartContextProvider'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
  <CartContextProvider>
    <Component {...pageProps} />
  </CartContextProvider>)
}
