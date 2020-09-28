import React, { Fragment, useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import axios from 'axios';
import { Box } from "@material-ui/core";
import AppComposedChart from "./AppWidgetComposedChart";
import moment from 'moment';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const { Header, Footer, Sider, Content } = Layout;


export default function App(props) {
	const [value, setValue] = React.useState(2);
  	const handleChange = (event, newValue) => {
    	setValue(newValue);
		loadBasicCount(newValue);
  	};
	const [summaryStockList, setSummaryStockList] = useState([]);

	useEffect(() => {		
		loadBasicCount(value);		
	  }, []);

	function loadBasicCount(selected) {
		let getDateFrom , getDateTo;
		if(selected===2){
			getDateFrom = moment().subtract(6, 'months').format('YYYY-MM-DD');
			getDateTo=	moment().format('YYYY-MM-DD');
			
		}
		if(selected===1){
		getDateFrom =moment().subtract(1, 'months').format('YYYY-MM-DD');
		getDateTo=	 moment().format('YYYY-MM-DD');
			
		}
		if(selected===0){
		getDateFrom = moment().subtract(1, 'weeks').format('YYYY-MM-DD');
		getDateTo=moment().format('YYYY-MM-DD')	;
		}
		const params = {
			access_key: '?8981ff5b981d23e93db360a871798b32&symbols=AAPL'
		  }		  
		  axios.get(`http://api.marketstack.com/v1/eod?access_key=8981ff5b981d23e93db360a871798b32&symbols=AAPL&date_from=${getDateFrom}&date_to=${getDateTo}`, {})
			.then(response => {
			  const apiResponse = response.data.data;
			  apiResponse.map((item)=>{
				item.date= moment(item.date).format('MMM-YY');
			  })
			  setSummaryStockList(apiResponse);
			}).catch(error => {
			  console.log(error);
			});
	  	}

	return (
		<Layout >
			<Header>Header</Header>
		<Box height={235}>             
		<AppBar position="static">
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="Period"
			>
				<Tab label="1 Week" />
				<Tab label="Last Month" />
				<Tab label="Last 6 Months" />
        	</Tabs>
      	</AppBar>
            <AppComposedChart
              data={summaryStockList}
            />         
      	</Box>
		</Layout>
	);
}

