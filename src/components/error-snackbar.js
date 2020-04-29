import React from 'react';
import {Snackbar} from '@material-ui/core';


export default class StockSnack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: null
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(errorMessage) {
        this.setState({
            open: true,
            message: errorMessage
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal:'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={this.state.message}
                />
            </div>
        );
    }
}