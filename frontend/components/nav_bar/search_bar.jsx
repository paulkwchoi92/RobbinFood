import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      search: "",
      results: [],
      display: false
    }
    
  }

  renderSearchResult() {
    const { results } = this.state
    return( 
      <div>
        <div className="search-result-title"> Stocks</div>
        {results.map((ele, idx) => 
          <div className="search-symbol">{ele.symbol}</div>
          <div className="serach-name">{ele.name}</div>)}
      </div>
    )
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default withRouter(SearchBar)