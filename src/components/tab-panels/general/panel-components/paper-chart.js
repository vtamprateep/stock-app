import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import React from 'react';
import '../../panel-css.css';


export default class StockChart extends React.Component {

    render() {
        return (
                <ResponsiveContainer width={750} height={300}>
                    <LineChart
                        data={this.props.stockPrice}
                    >
                        <Line type="monotone" dataKey="Close" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="Date"/>
                        <YAxis/>
                    </LineChart>
                </ResponsiveContainer>
        )
    }
}