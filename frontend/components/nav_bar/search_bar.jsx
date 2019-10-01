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
  componentDidMount() {
    this.props.fetchAllStocks()
  }
  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });

  }

  renderSearchResult() {
    const { results, search } = this.state;
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
    return (
      <div className="search-container">
        <div className="search-input">
          <svg
            id="search-magnifier"
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
          >
            <g transform="translate(-11.000000, -11.000000)">
              <path
                d="M23.0733726,24.4447312 C21.8075531,25.4199921 20.2215106,26 18.5,26 C14.3578644,26 11,22.6421356 11,18.5 C11,14.3578644 14.3578644,11 18.5,11 C22.6421356,11 26,14.3578644 26,18.5 C26,20.2215106 25.4199921,21.8075531 24.4447312,23.0733726 L28.1425948,26.7712362 L26.7712362,28.1425948 L23.0733726,24.4447312 Z M18.5,24 C21.5375661,24 24,21.5375661 24,18.5 C24,15.4624339 21.5375661,13 18.5,13 C15.4624339,13 13,15.4624339 13,18.5 C13,21.5375661 15.4624339,24 18.5,24 Z"
                id="Combined-Shape"
              ></path>
            </g>
          </svg>

          <input
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
    );
  }
}
export default withRouter(SearchBar);
