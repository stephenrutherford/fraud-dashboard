import { extendTheme } from "@chakra-ui/core"

const colors = {
	transparent: "transparent",
	black: "#000",
	white: "#fff",
	sidebar: {
		100: "#EEEEEE",
		300: "#84888D",
	},
	dark: {
		500: "#252F3D",
		900: "#1D242F",
		950: "#1B2136",
	},
	light: {
		300: "#F7F9FC",
	},
}

const customTheme = extendTheme({ colors })

export default customTheme
