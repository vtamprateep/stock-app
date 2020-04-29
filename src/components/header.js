import React from 'react';
import './headerCSS.css';
import {TextField, Box} from '@material-ui/core';


export default class Header extends React.Component {

    render() {
        return (
            <div className="App">
                <Box>
                    <h1>{this.props.headerTitle}</h1>
                    <h2>{this.props.headerSubText}</h2>
                    <TextField label="Ticker" onKeyDown={this.props.onKeyDown} />
                </Box>
            </div>
        )
    }
}
