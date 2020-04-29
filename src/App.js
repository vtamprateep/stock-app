import React from 'react';
import 'firebase/firestore';
import StockSnack from './components/error-snackbar';
import Header from './components/header';
import GeneralPanel from './components/tab-panels/general/general-panel';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stockProfile: [],
      stockPriceHistorical: [],
      searchFieldValue: '',
      displayContent: 0,
      momentum: null,
      moveAverage: null,
    };   
  }

  snackBarRef = React.createRef();

  showErrorBar(errorMessage) {
    this.snackBarRef.current.handleOpen(errorMessage)
    this.setState({
      displayContent: 0
    })
  }

  toggleGeneral = (event) => {
    if (this.state.stockPriceHistorical.length === 0) {
      this.showErrorBar("Please enter a valid ticker.")
    } else {
      this.setState({
        displayContent: 1
      })
    }
  }

  toggleSignal  = (event) => {
    if (this.state.stockPriceHistorical.length === 0) {
      this.showErrorBar("Please enter a valid ticker.")
    } else {
      this.setState({
        displayContent: 2
      })
    }
  }

  getProfile(ticker) {
    let URL = 'https://us-central1-gcp-python-finance.cloudfunctions.net/getStockProfile'
    let argHTTP = ('?ticker=' + ticker);
    fetch(URL + argHTTP).then(response => response.json()).then(
      data => {
        if (this.state.stockPriceHistorical.length === 0) {
          this.showErrorBar("This ticker is not available.");
        } else {
          this.setState({
            stockProfile: data,
            displayContent: 1
          })
        }
      })
  }

  getPrices(ticker) {
    let URL = 'https://us-central1-gcp-python-finance.cloudfunctions.net/getStockPrice'
    let argHTTP = ('?ticker=' + ticker);
    fetch(URL + argHTTP).then(response => response.json()).then(
      data => {
        if (JSON.parse(data).length === 0) {
          this.showErrorBar("This ticker is not available.");
          this.setState({
            stockPriceHistorical: JSON.parse(data)
          });
        } else {
          this.setState({
            stockPriceHistorical: JSON.parse(data)
          });
        }
    })
  }

  loadInfo = (event) => {
    this.setState({
      searchFieldValue: event.target.value
    });
    if (event.key === 'Enter') {
      this.getPrices((event.target.value).toUpperCase());
      this.getProfile((event.target.value).toUpperCase());
      
    }
  }

  render() {
    
    return (
      <div>
        <StockSnack ref = {this.snackBarRef}
          />
        <Header headerTitle="ModEx: Real-Time Signals"
          headerSubText="Enter Ticker Symbol Below:"
          onKeyDown={this.loadInfo}
        />
        <GeneralPanel 
          panelIndex={1}
          currentIndex={this.state.displayContent}
          stockProfile={this.state.stockProfile}
          stockPrice={this.state.stockPriceHistorical}
        />
      </div>
    );
  }
}

export default App;