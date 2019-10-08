import React from "react";
import {
  Line,
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  ReferenceLIne
} from "recharts";

import ChartTooltip from './stock_chart_toolltip'

class StockChart extends React.Components {
  constructor(props) {
    super(props);
    this.state = { currentSelection: "1d" };

    this.filterData = this.filterData.bind(this)
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
  filterData(data) {
    const {currentSelection} = this.state
    if (currentSelection === "1d" || currentSelection === "1w" ||
      currentSelection === "1m"
    ) {
      return data.intraday 
      } else { return data.history}
  }

  render() {
    const {currentSelection} = this.state
    const choice = this.selectionParser(this.state.currentSelection);
    let data = this.filterData(this.props.charts[choice])
    let start, end, currentStocks;
    const value = currentSelection === "1d" ? "open" : "close"
    if (data) {
      currentStocks = data.filter(ele => ele[value])
    }
    const chartOrLoading = data ? (
      <LineChart width={676} height={196} data={data}>
        <Line
          activeDot={{ r: 6 }}
          type="linear"
          strokeWidth={2}
          dataKey={value}
          stroke="#21ce99"
          dot={false}
        />
        <Tooltip
          wrapperStyle={{ visibility: 'visible' }}
          position={{ x: 0, y: -84 }}
          content={<ChartTooltip
            value={end ? end[value] : 0}
            prev={currentSelection === "1d" ? this.props.prev : (data[0] ? data[0].open : null)}
          />}
        />
        <ReferenceLine className={currentSelection === "1d" ? "" : "hidden"} y={this.props.prev} />
        <YAxis
          hide
          domain={[start, 'dataMax']} />
        <XAxis
          hide
          dataKey="date" />
      </LineChart>) : <div/>
      // <Loading id={"loading-chart"} />
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
