import React from 'react';
import { formatMoney } from "../../util/chart_util"

export default ({ active, payload, value, prev, coordinate }) => {
  let stockValue;
  value = parseFloat(value);
  prev = parseFloat(prev);
  // debugger
  if (active && payload && payload[0]) {
    stockValue = payload[0].value;
  } else {
    stockValue = value;
  }
  const diff = (stockValue - prev);
  const showDiff = diff.toFixed(2);
  let percent = prev === 0 ? 0 : (diff / prev) * 100;
  const showPercent = percent.toFixed(2);
  // debugger
  return (
    <div>
      <h1>{formatMoney(stockValue)}</h1>
      <div id="chart-percents">
        {`${diff > 0 ? "+" : ""}${showDiff} (${showPercent}%)`}
      </div>
      <div
        id="chart-time"
        style={{ left: coordinate.x - 32 }}>
        <span>
          {`${payload && payload[0] ? payload[0].payload.date : ""}`}
        </span>
      </div>
    </div>
  )
}