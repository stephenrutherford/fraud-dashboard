import React from "react"
import { Flex, Text, useColorMode } from "@chakra-ui/core"
import {
	LineChart,
	Line,
	Legend,
	XAxis,
	Tooltip,
	YAxis,
	ResponsiveContainer,
} from "recharts"

function DeclinedChart() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "white", dark: "dark.500" }
	const color = { light: "black", dark: "white" }

	// Graph Data
	const data = [
		{
			name: "Oct 22",
			uv: 4000,
			pv: 2400,
			amt: 2400,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 23",
			uv: 3000,
			pv: 1398,
			amt: 2210,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 24",
			uv: 2000,
			pv: 5102,
			amt: 2290,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 25",
			uv: 2780,
			pv: 3908,
			amt: 2000,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 26",
			uv: 1890,
			pv: 4800,
			amt: 2181,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 27",
			uv: 2390,
			pv: 3800,
			amt: 2500,
			random: Math.floor(Math.random() * 10001),
		},
		{
			name: "Oct 28",
			uv: 3490,
			pv: 4300,
			amt: 2100,
			random: Math.floor(Math.random() * 10001),
		},
	]

	return (
		<Flex
			flexDirection='column'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			w='100%'
		>
			<Text mx='4' my='2'>
				Declined by Type
			</Text>
			<ResponsiveContainer>
				<LineChart
					width={750}
					height={400}
					data={data}
					strokeWidth={2}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#2F8559' stopOpacity={0.9} />
							<stop offset='95%' stopColor='#2F8559' stopOpacity={0.1} />
						</linearGradient>
					</defs>
					<XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
					<YAxis />
					<Tooltip />

					<Line
						type='monotone'
						dataKey='pv'
						stroke='#8884d8'
						strokeWidth={2}
						activeDot={{ r: 6 }}
					/>
					<Line
						type='monotone'
						dataKey='random'
						stroke='#82ca9d'
						strokeWidth={2}
						strokeDasharray='5 5'
					/>

					{/* <Area
                type='monotone'
                dataKey='random'
                stroke='#2F8559'
                fill='url(#colorUv)'
                // fill='#8884d8'
                /> */}
				</LineChart>
			</ResponsiveContainer>
		</Flex>
	)
}

export default DeclinedChart
