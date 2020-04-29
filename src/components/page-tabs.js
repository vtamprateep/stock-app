import React from 'react';
import {Tabs, Tab} from '@material-ui/core';


export default class PageTabs extends React.Component {
    
    render() {
        return (
            <Tabs centered>
                <Tab label={this.props.pageTitle1} onClick={this.props.pageFunction1}/>
                <Tab label={this.props.pageTitle2} onClick={this.props.pageFunction2}/>
            </Tabs>

        )
    }
}   