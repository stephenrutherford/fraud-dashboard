import Head from "next/head"
import {
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	Box,
	Grid,
	Button,
	useColorMode,
	Divider,
	Stack,
	Stat,
	Spacer,
} from "@chakra-ui/core"

//Icons
import { ChevronDownIcon } from "@chakra-ui/icons"

// Components
import Sidebar from "../components/Sidebar"
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import React, { useState } from "react"
import ManualReviewTable from "../components/ManualReviewTable"
import FraudStats from "../components/FraudStats"
import DeclinedChart from "../components/DeclinedChart"
import ManualReviewChart from "../components/ManualReviewChart"

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "light.300", dark: "dark.950" }
	const color = { light: "black", dark: "white" }

	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Container */}
				<Flex w='100vw' maxH='100vh'>
					{/* Left Sidebar */}
					<Sidebar />

					{/* Right Content */}
					<Flex
						flex='1'
						flexDirection='column'
						bg={bgColor[colorMode]}
						color={color[colorMode]}
						overflow='scroll'
					>
						{/* AppBar */}
						<Appbar />

						{/* Header */}
						<Flex mx='6' mt='4' justifyContent='flex-start'>
							<Stack spacing='2' isInline alignItems='baseline'>
								<Heading as='h2' size='lg'>
									Fraud Dashboard
								</Heading>
								<Text fontSize='sm'>Monday, 26th October 2020</Text>
							</Stack>
							<Spacer />
							<Flex>
								{/* <Flex justifyContent='flex-end' ml='auto'> */}
								<Menu>
									<MenuButton as={Button} size='sm' variantColor='green'>
										Today
										<ChevronDownIcon w={6} h={6} />
									</MenuButton>
									<MenuList>
										<MenuItem>Today</MenuItem>
										<MenuItem>Last 7 Days</MenuItem>
										<MenuItem>Last 30 Days</MenuItem>
										<MenuItem>Last 365 Days</MenuItem>
									</MenuList>
								</Menu>
							</Flex>
						</Flex>

						<Divider mx='6' my='4' />

						{/* Top Row (Grid Panels) */}
						<FraudStats />

						{/* Mid Row Content */}
						<Flex mx='6' my='4' flexDirection='row'>
							{/* Graph */}
							<DeclinedChart />
							{/* Pie Chart */}
							<ManualReviewChart />
						</Flex>

						{/* Bottom Row */}
						<Flex mx='6' my='4'>
							{/* Table */}
							<ManualReviewTable />
						</Flex>

						{/* Footer */}
						<Footer />

						{/* End Right Content */}
					</Flex>

					{/* End Container */}
				</Flex>
			</main>
		</div>
	)
}
