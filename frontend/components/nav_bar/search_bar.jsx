import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllStocks();
  }
  handleChange(field) {
    return e => {
      const results = this.props.search(e.target.value);
      // debugger;
      this.setState({
        [field]: e.target.value,
        results: results,
        display: true
      });
    };
    // return e =>
    //   this.setState({
    //     [field]: e.target.value,
    //     results: results
    //   });
  }
  handleClick(e) {
    debugger;
    this.setState(
      {
        display: false,
        results: [],
        search: ""
      },
      () => {
        this.props.history.push(`stocks/${e.currentTarget.id}`);
      }
    );
  }
  renderSearchResult() {
    const { results, search, display } = this.state;
    // debugger
    return search.length > 0 ? (
      <div className="search-result-container">
        <div className="search-result-title"> Stocks</div>
        {results.length && display === true > 0 ? (
          results.map((ele, idx) => (
            <div
              key={idx}
              className="resultbox"
              id={ele.symbol}
              onClick={this.handleClick}
            >
              <div className="search-symbol">{ele.symbol}</div>
              <div className="serach-name">{ele.name}</div>
            </div>
          ))
        ) : (
          <div>No matching Result </div>
        )}
      </div>
    ) : (
      <div />
    );
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-middle">
          <div className="search-inner">
            <div className="search-input">
              <i className="fas fa-search magnifier"></i>

              <input
                className="inputbar"
                type="text"
                placeholder="Search"
                autocomplete="off"
                autoCorrect="off"
                spellCheck="false"
                autoapitalize="none"
                onChange={this.handleChange("search")}
              />
            </div>
            {this.renderSearchResult()}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(SearchBar);
