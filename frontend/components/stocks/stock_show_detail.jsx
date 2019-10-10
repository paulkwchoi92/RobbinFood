import React from "react";
import { formatMoney } from "../../util/chart_util"

class StockShowDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      readMore: false
    }
  }

  numParser(num) {
    if (num > 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    }
    else if (num > 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    }
  }
  toggleState(field) {
    return () => {
      this.setState({ [field]: !this.state[field] });
    };
  }

  render() {
    const { details, details2 } = this.props;
    let stockDetails = { 
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
    let descriptionParts = []
    let midPoint = details.description.length / 2
    descriptionParts.push(details.description.slice(0, midPoint))
    descriptionParts.push(details.description.slice(midPoint, details.description.length - 1))
    return (
      <div className="stock-show-container">
        <header>
          <h2>About</h2>
          <button onClick={this.toggleState("showMore")}>{this.state.showMore ? "Show Less" : "Show More"}</button>
        </header>
        <h3>
          {descriptionParts[0]}
          <span className={this.state.readMore ? "" : "hidden"}>{descriptionParts[1]}</span>
          <button onClick={this.toggleState("readMore")}>{this.state.readMore ? "Read Less" : "Read More"}</button>
        </h3>
        <div className={this.state.showMore ? "grid long" : "grid"}>
          {Object.keys(stockDetails).map(key => {
            return (
              <div key={key} className="grid-item">
                <div className="grid-head">{key}</div>
                <div className="grid-value">{stockDetails[key] ? stockDetails[key] : <p>-</p>}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default StockShowDetail;
