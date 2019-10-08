import React from "react";
import { formatMoney } from "../../util/chart_util"

class StockShowDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  numParser(num) {
    if (num > 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    }
    else if (num > 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    }
  }

  render() {
    // debugger;
    debugger
    const { details, details2 } = this.props;
    stockDetails = { 
      "CEO": details.ceo, 
      "Employees": details.employees,
      "Headquarters": details.headquarters,
      "Founded": details.founded,
      "Dividend Yield": details.dividend_yield,
      "Average Volument": details2.volume_avg,
      "High Today": formatMoney(details2.day_high),
      "Low Today": formatMoney(details2.day_low),
      "Open Price": formatMoney(details2.price_open),
      "Volume": this.numParser(details2.volume),
      "52 Week High": formatMoney(details2["52_week_high"]),
      "52 Week Low": formatMoney(details2["52_week_low"])
    };
      
    return (
      <div className="stock-show-container">
        <div className="stock-show-header">
          <h2>About</h2>
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
              <div classname="stock-info-inf">{details2.market_cap ? details2.market_cap : <p>-</p>}</div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Dividend Yield</h3>
              <div classname="stock-info-inf">
                {details.dividend_yield ? details.dividend_yield : <p>-</p>}
              </div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">High Today</h3>
              <div classname="stock-info-inf">{details2.day_high ? details2.day_high : <p>-</p>}</div>
            </div>
            <div className="stock-info-sections">
              <h3 className="stock-info-headers">Average Volume</h3>
              <div classname="stock-info-inf">{details2.volume_avg ? details2.volume_avg : <p>-</p>}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockShowDetail;
