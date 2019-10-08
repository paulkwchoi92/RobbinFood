import React from "react";
import {
  Line,
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  ReferenceLIne
} from "recharts";

class StockChart extends React.Components {
  constructor(props) {
    super(props);
    this.state = { currentSelection: "1d" };
  }

  selectionParser(str) { 
    switch (str) {
      case "1d":
        return "oneday"
      case "1w":
        return "oneweek"
      case "1m":
        return "onemonth"
      case "3m":
        return "threemonths"
      case "1y":
        return "oneyear"
      case "5y":
        return "fiveyears"
      default:
        return
    }
  }

  render() {
    const {currentSelection} = this.state
    const choice = this.selectionParser(this.state.currentSelection);
    let data = this.props.charts[choice]
    let start, end, currentStocks;
    const value = currentSelection === "1d" ? "open" : "close"
    if (data) {
      currentStocks = data.filter(ele => ele[value])
    }
    
    return (
      <div>
        <div id="stock-chart">
          <h1 id="stock-name">{this.props.name}</h1>
          {chartOrLoading}
        </div>
        <nav id="chart-buttons">
          {["1d", "1w", "1m", "3m", "1y", "5y"].map(range => {
            return (
              <button
                key={range}
                className={this.state.currentChart === range ? "selected" : ""}
                onClick={() => this.setState({ currentChart: range })}
              >
                {range}
              </button>
            );
          })}
        </nav>
      </div>
    );
  }
}

export default StockChart;
