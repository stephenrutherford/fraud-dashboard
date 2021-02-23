import React from "react"
import {
	Box,
	Grid,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	useColorMode,
} from "@chakra-ui/core"

function FraudStats() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "white", dark: "dark.500" }
	const color = { light: "black", dark: "white" }

	return (
		<Grid mx='6' my='2' templateColumns='repeat(4, 1fr)' gap={6}>
			<Box
				w='100%'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				// alignItems='center'
				rounded='md'
			>
				<Stat d='flex' flexDirection='column' alignItems='center' p='2'>
					<StatLabel>Volume</StatLabel>
					<StatNumber>{Math.floor(Math.random() * 10001)}</StatNumber>
					<StatHelpText>
						<StatArrow type='decrease' />
						{Math.floor(Math.random() * 101)}%
					</StatHelpText>{" "}
				</Stat>
			</Box>
			<Box
				w='100%'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				rounded='md'
			>
				<Stat d='flex' flexDirection='column' alignItems='center' p='2'>
					<StatLabel>Declined</StatLabel>
					<StatNumber>{Math.floor(Math.random() * 1001)}</StatNumber>
					<StatHelpText>
						<StatArrow type='increase' />
						{Math.floor(Math.random() * 101)}%
					</StatHelpText>{" "}
				</Stat>
			</Box>
			<Box
				w='100%'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				rounded='md'
			>
				<Stat d='flex' flexDirection='column' alignItems='center' p='2'>
					<StatLabel>Reviewed</StatLabel>
					<StatNumber>{Math.floor(Math.random() * 251)}</StatNumber>
					<StatHelpText>
						<StatArrow type='decrease' />
						{Math.floor(Math.random() * 101)}%
					</StatHelpText>{" "}
				</Stat>
			</Box>
			<Box
				w='100%'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				rounded='md'
			>
				<Stat d='flex' flexDirection='column' alignItems='center' p='2'>
					<StatLabel>Losses</StatLabel>
					<StatNumber>£{Math.floor(Math.random() * 1001)}</StatNumber>
					<StatHelpText>
						<StatArrow type='increase' />
						{Math.floor(Math.random() * 101)}%
					</StatHelpText>
				</Stat>
			</Box>
		</Grid>
	)
}

export default FraudStats
