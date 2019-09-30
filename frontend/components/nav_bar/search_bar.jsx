import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      display: false
    };
  }

  renderSearchResult() {
    const { results, serach } = this.state;
    return search.length > 0 ? (
      <div>
        <div className="search-result-title"> Stocks</div>
        {results.map((ele, idx) => (
          <div key={idx} className="resultbox">
            <div className="search-symbol">{ele.symbol}</div>
            <div className="serach-name">{ele.name}</div>
          </div>
        ))}
      </div>
    ) : (
      <div />
    );
  }
  render() {
    return <div className="search-container">
      {this.renderSearchResult()}
    </div>;
  }
}
export default withRouter(SearchBar);
