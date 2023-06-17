import { CartContextProvider } from '@/context/CartContextProvider'
import { UserContextProvider } from '@/context/UserContextProvider'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
		<UserContextProvider>
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</UserContextProvider>
	);
}
