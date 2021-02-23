import React from "react"
import { Flex, Text, useColorMode } from "@chakra-ui/core"
import { Cell, Pie, PieChart } from "recharts"
import TableShort from "./TableShort"

function ManualReviewChart() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "white", dark: "dark.500" }
	const color = { light: "black", dark: "white" }

	// Pie Data
	const data02 = [
		{ name: "Group A", value: Math.floor(Math.random() * 501) },
		{ name: "Group B", value: Math.floor(Math.random() * 501) },
		{ name: "Group C", value: Math.floor(Math.random() * 501) },
		{ name: "Group D", value: Math.floor(Math.random() * 501) },
	]

	// Pie Functions
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

	const RADIAN = Math.PI / 180
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5
		const x = cx + radius * Math.cos(-midAngle * RADIAN)
		const y = cy + radius * Math.sin(-midAngle * RADIAN)

		return (
			<text
				x={x}
				y={y}
				fill='white'
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline='central'
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		)
	}

	return (
		<Flex
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			flexDirection='column'
			w='40%'
			ml='6'
			alignItems='center'
		>
			<Text mx='4' my='2'>
				Losses by Type
			</Text>
			<PieChart width={200} height={200}>
				<Pie
					data={data02}
					cx={100}
					cy={100}
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={80}
					fill='#8884d8'
					dataKey='value'
				>
					{data02.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
			<Flex w='100%' justifyContent='center'>
				<TableShort />
			</Flex>
		</Flex>
	)
}

export default ManualReviewChart
