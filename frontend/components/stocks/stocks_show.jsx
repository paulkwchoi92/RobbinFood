import React from 'react'
import CompanyNewsContainer from '../news/company_new_container'
import {withRouter} from 'react-router-dom'
class StockShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className="stocks-show-container">

        
        <CompanyNewsContainer />
      </div>
    )
  }
}

export default withRouter(StockShow)