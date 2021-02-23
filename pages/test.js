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
} from "@chakra-ui/core"

// Components
import Sidebar from "../components/Sidebar"
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import React, { useState } from "react"
import ManualReviewTable from "../components/ManualReviewTable"
import FraudStats from "../components/FraudStats"
import DeclinedChart from "../components/DeclinedChart"
import ManualReviewChart from "../components/ManualReviewChart"

export default function Test() {
	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Container */}
				<Flex w='100vw' minH='100vh'>
					{/* Left Sidebar */}
					<Sidebar />

					{/* Right Content */}
					<Flex flex='1' flexDirection='column' backgroundColor='gray.100'>
						{/* AppBar */}
						<Appbar />
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						v
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						v
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
						<Heading as='h1' size='lg'>
							Content
						</Heading>
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
