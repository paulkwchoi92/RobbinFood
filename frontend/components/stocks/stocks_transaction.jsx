import React from 'react'

class StocksTransaction extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      switch: false,
      numOfShares: 0,
      error: ""

    }
  }
  renderEstimatedCost() {
    return (<div>{this.state.numOfShares * this.props.marketPrice}</div>)
  }

  renderReviewButton() {
    return 
  }
  renderErrors() {
    return
  }

  render

  render() {
    return ( 
      <div> 

      </div>
    )
  }
}