import React from 'react'
import { Line, LineChart, YAxis, XAxis, Tooltip, ReferenceLIne } from 'recharts'

class StockChart extends React.Components{
  constructor(props) {
    super(props)
    this.state = { currentSelection: "1d" };
  }

  render() {
    const choice = this.state.currentSelection;
    let data =
  }
}

export default StockChart