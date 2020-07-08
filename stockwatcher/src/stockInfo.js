import React from 'react';

class StockInfo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          symbol: '',
          open: '',
          high: '',
          low: '',
          price: '',
          volume: '',
          previous_close: '',
          change: '',
          change_percent: ''
        };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ this.state.symbol + "&apikey=KROX8C7HEMM7ZMIT")
          .then(res => res.json())
          .then(data => this.setState({
              open: data["Global Quote"]["02. open"],
              high: data["Global Quote"]["03. high"],
              low: data["Global Quote"]["04. low"],
              price: data["Global Quote"]["05. price"],
              volume: data["Global Quote"]["06. volume"],
              previous_close: data["Global Quote"]["08. previous close"],
              change: data["Global Quote"]["09. change"],
              change_percent: data["Global Quote"]["10. change percent"]
          }));
      event.preventDefault();
    }

    handleChange(event) {
        this.setState({symbol: event.target.value});
      }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Stock:
            <input type="text" value={this.state.symbol} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
            Symbol: {this.state.symbol} <br />
            Open: {this.state.open} $ <br />
            High: {this.state.high} $ <br />
            Low: {this.state.low} $ <br />
            Price: {this.state.price} $ <br />
            Volume: {this.state.volume} <br />
            Previous Close: {this.state.previous_close} $ <br />
            Change: {this.state.change} $ <br />
            change In percent: {this.state.change_percent} % <br />
        </div>
        </div>
      );
    }
  }

  export default StockInfo;