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

  render() {
    const choice = this.state.currentSelection;
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
