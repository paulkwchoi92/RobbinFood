import React from "react";
import {
  Line,
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  ReferenceLine
} from "recharts";

import ChartTooltip from './stock_chart_toolltip'
import Loader from "../loader"
class StockChart extends React.Component {
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
    // debugger
    const {currentSelection} = this.state
    const choice = this.selectionParser(this.state.currentSelection);
    let ObjectData = this.filterData(this.props.charts[choice])
    // debugger
    let data =  Object.keys(ObjectData).map(function (key) {
      return { ...ObjectData[key], ...{ date: key } }
    })
    let start, end, currentStocks;
    // debugger
    const value = currentSelection === "1d" ? "open" : "close"
    if (data) {
      // debugger
      currentStocks = data.filter(ele => ele[value])
    }
    start = currentSelection === "1d" ? Math.min(this.props.prevClose, ...currentStocks.map(ele => ele[value])) : "dataMin"
    end = currentStocks[currentStocks.length - 1]
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
            prev={currentSelection === "1d" ? this.props.prevClose : (data[0] ? data[0].open : null)}
          />}
        />
        <ReferenceLine className={currentSelection === "1d" ? "" : "hidden"} y={this.props.prev} />
        <YAxis
          hide
          domain={[start, 'dataMax']} />
        <XAxis
          hide
          dataKey="date" />
      </LineChart>) : <Loader id={"loading-chart"}/>
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
                onClick={() => this.setState({ currentSelection: range })}
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
