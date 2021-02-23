import React, {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react"
import { Flex, Text, useColorMode } from "@chakra-ui/core"
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { AgGridColumn, AgGridReact } from "ag-grid-react"

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"

function ManualReviewTable() {
	const { colorMode, toggleColorMode } = useColorMode()
	const bgColor = { light: "white", dark: "dark.500" }
	const color = { light: "black", dark: "white" }
	const theme = { light: "ag-theme-alpine", dark: "ag-theme-alpine-dark" }

	// Data Grid
	const [gridApi, setGridApi] = useState(null)
	const [gridColumnApi, setGridColumnApi] = useState(null)

	// Auto-Size columns on load.
	const onFirstDataRendered = (params) => {
		params.api.sizeColumnsToFit()
	}

	// Icons
	const MoodRenderer = forwardRef((props, ref) => {
		const imageForMood = (mood) =>
			mood === "Happy"
				? "https://www.ag-grid.com/documentation/theme-icons/alpine/tick.svg"
				: "https://www.ag-grid.com/documentation/theme-icons/alpine/cancel.svg"

		const [mood, setMood] = useState(imageForMood(props.value))

		useImperativeHandle(ref, () => {
			return {
				refresh(params) {
					setMood(imageForMood(params.value))
				},
			}
		})

		// return {mood}
		return <img width='20px' src={mood} />
	})

	const [rowData, setRowData] = useState([
		{
			id: 123456,
			user_id: 12345,
			device_id: 1234567,
			user_country: "Russia",
			status: "Happy",
			ip_country: "Germany",
			card_country: "Germany",
			type: "ATO",
			amount: "$123",
			purchase_time: "2020-10-28",
			product: "Product 1",
		},
		{
			id: 123456,
			user_id: 12345,
			device_id: 1234567,
			user_country: "Russia",
			ip_country: "Germany",
			card_country: "Germany",
			type: "Credit Card",
			amount: "$123",
			purchase_time: "2020-10-28",
			product: "Product 1",
		},
		{
			id: 123456,
			user_id: 12345,
			device_id: 1234567,
			user_country: "Russia",
			status: "Happy",
			ip_country: "Germany",
			card_country: "Germany",
			type: "ATO",
			amount: "$123",
			purchase_time: "2020-10-28",
			product: "Product 1",
		},
		{
			id: 123456,
			user_id: 12345,
			device_id: 1234567,
			user_country: "Russia",
			ip_country: "Germany",
			card_country: "Germany",
			type: "Credit Card",
			amount: "$123",
			purchase_time: "2020-10-28",
			product: "Product 1",
		},
		{
			id: 123456,
			user_id: 12345,
			device_id: 1234567,
			user_country: "Russia",
			ip_country: "Germany",
			card_country: "Germany",
			type: "ATO",
			amount: "$123",
			purchase_time: "2020-10-28",
			product: "Product 1",
		},
	])

	return (
		<Flex
			w='100%'
			h='100%'
			minHeight='300px'
			direction='column'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
		>
			<Text mx='4' my='2'>
				Manual Review
			</Text>
			<div
				className={theme[colorMode]}
				style={{ height: "100%", width: "100%" }}
			>
				<AgGridReact
					rowData={rowData}
					defaultColDef={{ resizable: true }}
					onFirstDataRendered={onFirstDataRendered}
					enableCellTextSelection={true}
					ensureDomOrder={true}
					pagination={true}
					paginationPageSize={10}
					// rowSelection={'multiple'}
					frameworkComponents={{
						moodRenderer: MoodRenderer,
					}}
				>
					<AgGridColumn
						field='id'
						headerName='Id'
						width={90}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='status'
						// headerName="Mood"
						cellRenderer='moodRenderer'
						width={90}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='user_id'
						headerName='User Id'
						width={90}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='device_id'
						headerName='Device Id'
						width={90}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='user_country'
						headerName='User Country'
						width={120}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='ip_country'
						headerName='IP Country'
						width={120}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='card_country'
						headerName='Card Country'
						width={120}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='type'
						headerName='Fraud Type'
						width={120}
						minWidth={10}
						maxWidth={150}
						cellStyle={cellClass}
					/>
					<AgGridColumn
						field='amount'
						headerName='Amount'
						width={90}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='purchase_time'
						headerName='Date'
						width={120}
						minWidth={10}
						maxWidth={150}
					/>
					<AgGridColumn
						field='product'
						headerName='Product'
						width={130}
						minWidth={10}
						maxWidth={150}
					/>
				</AgGridReact>
			</div>
		</Flex>
	)
}

export default ManualReviewTable

function cellClass(params) {
	return params.value === "ATO"
		? { backgroundColor: "#ACD86E" }
		: { backgroundColor: "red" }
}
