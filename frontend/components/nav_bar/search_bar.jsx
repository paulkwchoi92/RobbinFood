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
      this.setState({
        [field]: e.target.value,
        results: results,
        display: true
      });
    };
  }
  handleClick(e) {
    const link = e.currentTarget.id;
    this.setState(
      {
        search: "",
        display: false,
        results: []
      },
      () => {
        this.props.history.push(`/stocks/${link}`);
      }
    );
  }
  renderSearchResult() {
    const { results, search, display } = this.state;
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
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                autoapitalize="none"
                value={this.state.search}
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
