import React from "react";


import { Link } from "react-router-dom";





class PreLogHome extends React.Component { 
  render() {
    return(
    <div className="homecont">
      <div className="homeoutl">
        <div className="homemidl">
          <div className="textbox">
            <div className="toptext">
                <h1 className="tti">
                  Practice<br/>
               <span className="tti2">Investing Free</span></h1>
            </div>
            <div className="midtext">
                <span className="mt">Invest in stocks, ETFs, options, and
                cryptocurrencies, all commission-free, right
                from your phone or desktop.</span>
            </div>
            <div className="ltsu">
                <div className="ltsuin">
                  <Link to="/signup" className="signup-button">Sign up!</Link>
                </div>
            </div>

          </div>
          <div className="imagebox">
              <div className="imgbo">
                <img src="https://cdn.robinhood.com/assets-about/6b2e66f81aef0f0d7dbeef37392e0eca.png"className="rbimg" />
              </div>
              
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default PreLogHome