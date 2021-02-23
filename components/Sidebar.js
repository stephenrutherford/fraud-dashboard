import React from "react"
import {
	Flex,
	Link,
	Text,
	Box,
	Badge,
	Avatar,
	AvatarBadge,
	Stack,
	Divider,
	DarkMode,
} from "@chakra-ui/core"
import {
	MdMoneyOff,
	MdSecurity,
	MdTimeline,
	MdDone,
	MdFormatListBulleted,
	MdInsertChart,
	MdLibraryBooks,
	MdSettingsInputComponent,
} from "react-icons/md"
import { BiCalendar } from "react-icons/bi"
import { IoLogoBuffer } from "react-icons/io"

function Sidebar() {
	return (
		<DarkMode>
			<Flex
				minW='240px'
				minh='100%'
				backgroundColor='dark.900'
				color='sidebar.100'
				flexDirection='column'
			>
				{/* Logo */}
				<Flex
					w='100%'
					h='60px'
					backgroundColor='dark.500'
					p='6'
					justifyContent='center'
					alignItems='center'
				>
					{/* <IoLogoBuffer color="purple" /> */}
					<Box as={IoLogoBuffer} size='24px' color='purple.700' />
					<Text as='h2' mx='1'>
						Dashboard App
					</Text>
					<Badge variant='solid' colorScheme='green'>
						Demo
					</Badge>
				</Flex>

				{/* Links */}
				<Flex w='100%' h='100%' flexDirection='column'>
					<Text fontSize='sm' pl='4' pt='5' pb='2'>
						Dashboards
					</Text>
					<Stack spacing='3'>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdTimeline} size='24px' color='sidebar.300' />
								<Text ml='4'>Fraud</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdInsertChart} size='24px' color='sidebar.300' />
								<Text ml='4'>Sales</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdMoneyOff} size='24px' color='sidebar.300' />
								<Text ml='4'>Chargebacks</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdSecurity} size='24px' color='sidebar.300' />
								<Text ml='4'>Rules</Text>
							</Flex>
						</Link>
					</Stack>

					<Divider my='5' borderColor='transparent' />

					<Text fontSize='sm' pl='4' pb='2'>
						Operations
					</Text>
					<Stack spacing='3'>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdDone} size='24px' color='sidebar.300' />
								<Text ml='4'>Tasks</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={BiCalendar} size='24px' color='sidebar.300' />
								<Text ml='4'>Calendar</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box as={MdLibraryBooks} size='24px' color='sidebar.300' />
								<Text ml='4'>Documents</Text>
							</Flex>
						</Link>
					</Stack>

					<Divider my='5' borderColor='transparent' />

					<Text fontSize='sm' pl='4' pb='2'>
						Other
					</Text>
					<Stack spacing='3'>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box
									as={MdSettingsInputComponent}
									size='24px'
									color='sidebar.300'
								/>
								<Text ml='4'>Settings</Text>
							</Flex>
						</Link>
						<Link href='/'>
							<Flex alignItems='center' px='4'>
								<Box
									as={MdFormatListBulleted}
									size='24px'
									color='sidebar.300'
								/>
								<Text ml='4'>Changelog</Text>
							</Flex>
						</Link>
					</Stack>
				</Flex>

				{/* Profile */}
				<Flex w='100%' h='60px' backgroundColor='dark.500'>
					<Flex alignItems='center'>
						<Avatar size='sm' name='Bruce Wayne' mx='3'>
							<AvatarBadge
								boxSize='1.25em'
								bg='green.500'
								borderColor='sidebar.100'
							/>
						</Avatar>
						<Flex direction='column'>
							<Text fontSize='sm' color='sidebar.100'>
								Bruce Wayne
							</Text>
							<Text fontSize='xs' color='sidebar.100'>
								Entrepreneur
							</Text>
						</Flex>
					</Flex>
				</Flex>
				{/* Navigation */}
				{/* Profile */}
			</Flex>
		</DarkMode>
	)
}

export default Sidebar
