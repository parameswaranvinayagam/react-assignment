import React, { Fragment, useEffect, useState } from "react";
import logo from './logo.svg';
import 'antd/dist/antd.css';
import styleChanges from './index.css';
import { Layout } from 'antd';
import httpHelper from "./common/helpers/HttpHelper";
import axios from 'axios';
import { Box, Typography } from "@material-ui/core";
import AppComposedChart from "./AppWidgetComposedChart";
import moment from 'moment';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const { Header, Footer, Sider, Content } = Layout;


export default function App(props) {
	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  

	const [summaryStockList, setSummaryStockList] = useState([]);


	useEffect(() => {
		
		loadBasicCount();
		
	  }, []);

	  function loadBasicCount() {
		  const copyArray=[];
		const params = {
			access_key: '?8981ff5b981d23e93db360a871798b32&symbols=AAPL'
		  }		  
		  axios.get('http://api.marketstack.com/v1/eod?access_key=8981ff5b981d23e93db360a871798b32&symbols=AAPL&date_from=2020-04-25&date_to=2020-09-25', {})
			.then(response => {
			  const apiResponse = response.data.data;

			  apiResponse.map((item)=>{					

				item.date= moment(item.date).format('MMM-YY');
			  })

			  console.log(apiResponse);

			  
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
          aria-label="simple tabs example"
        >
          <Tab label="1 Week" />
          <Tab label="Last Month" />
          <Tab label="Last 6 Months" />
        </Tabs>
      </AppBar>
            <AppComposedChart
              data={ summaryStockList}
            />
         
      </Box>

		</Layout>
	);
}

