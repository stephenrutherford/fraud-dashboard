import { Flex, Text, useColorMode, Spacer } from "@chakra-ui/core"
import React from "react"

function Footer() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "white", dark: "dark.950" }
	const color = { light: "black", dark: "white" }

	return (
		<Flex
			h='60px'
			w='100%'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			alignItems='center'
			// justifyContent='flex-end'
			pr='5'
		>
			<Spacer />
			<Text>(C)2020 - Myself</Text>
		</Flex>
	)
}

export default Footer
