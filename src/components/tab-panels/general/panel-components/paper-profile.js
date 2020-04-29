import React from 'react';
import {Paper} from '@material-ui/core';
import '../../panel-css.css';
import NumberFormat from 'react-number-format';


export default class StockProfile extends React.Component {

    render() {
        let stockProfile = this.props.stockProfile;
        return (
            <Paper className="Items Items-Profile">
                <p><b>Name:</b> {stockProfile['Name']}</p>
                <p><b>Website URL:</b> {stockProfile['Website']}</p>
                <p>
                    <b>52-Week High: </b>
                    <NumberFormat value={stockProfile['52High']}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'} 
                        decimalScale={2}   
                    />
                </p>
                <p>
                    <b>52-Low: </b> 
                    <NumberFormat value={stockProfile['52Low']}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}    
                    />
                </p>
                <p>
                    <b>Dividend Yield: </b> 
                    <NumberFormat value={stockProfile['DividendYield']}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}  
                    />   
                </p>
                <p>
                    <b>Market Cap: </b>
                    <NumberFormat value={stockProfile['MarketCap']}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}   
                    />  
                </p>
            </Paper>
        )
    }
}