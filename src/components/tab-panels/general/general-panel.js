import React from 'react';
import StockChart from './panel-components/paper-chart';
import StockProfile from './panel-components/paper-profile';
import {Typography, Grid, Paper, Box} from '@material-ui/core';
import '../panel-css.css';


export default class GeneralPanel extends React.Component {

    render() {
        return(
            <Typography
                component="div"
                hidden={this.props.currentIndex !== this.props.panelIndex}
            >
                <Grid container justify="center" className="Panel">
                    <Grid item>
                        <StockProfile stockProfile={this.props.stockProfile}/>
                    </Grid>
                    <Grid item>
                        <StockChart stockPrice={this.props.stockPrice}/>
                    </Grid>
                    <Grid container justify="center">
                        <Paper className="Items Items-Desc">
                            <Typography variant="h5"><b>Description:</b></Typography>
                            <p></p>
                            <Typography variant="p">{this.props.stockProfile["BusinessSummary"]}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Typography>
        )
    }

}