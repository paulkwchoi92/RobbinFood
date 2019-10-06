import React from "react";

class StockShowDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    const { details } = this.props;
    return (
      <div className="stock-show-container">
        <div className="stock-show-header">
          <h2>Abouty</h2>
        </div>
        <div className="stock-show-description">
          {details.description ? details.description : <p>-</p>}
        </div>
        <div className="stock-info-container">
          <div className="stock-info-top">
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">CEO</h3>
              <div classname="stock-info-inf">
                {details.ceo ? details.ceo : <p>-</p>}
              </div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Employees</h3>
              <div classname="stock-info-inf">
                {details.employees ? details.employees : <p>-</p>}
              </div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Headquarters</h3>
              <div classname="stock-info-inf">
                {details.headquarters ? details.ceo : <p>-</p>}
              </div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Founded</h3>
              <div classname="stock-info-inf">
                {details.founded ? details.founded : <p>-</p>}
              </div>
            </div>
          </div>
          <div className="stock-info-bottom">
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Market Cap</h3>
              <div classname="stock-info-inf">-</div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Dividend Yield</h3>
              <div classname="stock-info-inf">
                {details.dividend_yield ? details.dividend_yield : <p>-</p>}
              </div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">High Today</h3>
              <div classname="stock-info-inf">-</div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Average Volume</h3>
              <div classname="stock-info-inf">-</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockShowDetail;
