import {
	Flex,
	IconButton,
	Stack,
	Box,
	useColorMode,
	Spacer,
} from "@chakra-ui/core"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
	MdWbSunny,
	MdBrightness2,
	MdChatBubbleOutline,
	MdNotificationsNone,
	MdBrightness6,
} from "react-icons/md"
import React from "react"

function Appbar() {
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
			justifyContent='flex-end'
			pr='5'
		>
			<Spacer />
			<Stack direction='row' spacing={4} alignItems='center'>
				<Box as={MdChatBubbleOutline} size='20px' />
				<Box as={MdNotificationsNone} size='24px' />

				{/* <Box as={toggleColorMode ? MdWbSunny : MdBrightness2} size="22px" onClick={toggleColorMode} /> */}
			</Stack>
			<IconButton
				ml='1'
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant='ghost'
			/>
		</Flex>
	)
}

export default Appbar
