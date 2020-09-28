import React, { Fragment } from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590,
  },
  {
    name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350,
  },
  {
    name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480,
  },
  {
    name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380,
  },
];

  

export default function AppComposedChart(props) {

  
  return (
    <Fragment>
  
    <ResponsiveContainer width="75%" height="100%" style={{padding:"20px"}}>
      <ComposedChart
        layout="horizontal"
        width={400}
        height={320}
        data={props.data}
        style={{ left: -20, padding: "0px 0px 0px 10px" }}
        margin={{ top: 20, bottom: 75 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="date"
          
        />
        <YAxis type="number" />
        <Tooltip />
        <Area dataKey="high" fill="#87cefa" stroke="#87cefa" />
      </ComposedChart>     
    </ResponsiveContainer>
    

    </Fragment>
    
  );
}
