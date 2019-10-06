import React from "react";

class StockShowDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    const { details } = this.props;
    return (
      <div className="stock-show-container">
        <div className="stock-show-header">
          <h2>Abouty</h2>
        </div>
        <div className="stock-show-description"></div>
        <div className="stock-info-container"></div>
      </div>
    );
  }
}

export default StockShowDetail;
