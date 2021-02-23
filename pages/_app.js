import { ChakraProvider, theme, CSSReset } from "@chakra-ui/core"
import "../styles/globals.css"
import customTheme from "../styles/theme"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
