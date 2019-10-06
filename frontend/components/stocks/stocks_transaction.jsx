import React from 'react'

class StocksTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      switch: false,
      numOfShares: 0

    }
  }
  renderEstimatedCost() {
    return (<div>{this.state.numOfShares * this.props.marketPrice}</div>)
  }

  render() {
    return ( 
      <div> 

      </div>
    )
  }
}