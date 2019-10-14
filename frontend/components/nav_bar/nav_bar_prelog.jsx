import React from "react";

import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import GreetingContainer from "../greetings/greetings_container";

import RootFeatBox from "../extra_features/root_feat_box";

class PreLogNav extends React.Component {
  render() {
    return (
      <div>
        <nav className="nvb-ct">
          <div className="nvb-out">
            <div className="nvb-mid">
              <Link to="/" className="nvb-log-btn">
                <div className="nvb-log-out">
                  <FontAwesomeIcon className="logo" icon={faPizzaSlice} />
                  <span className="log-n">RobbinFood</span>
                </div>
              </Link>
              <div className="lft-cont">
                <div className="lft-cont-lft">
                  <div className="mores">
                    <div role="button" className="m-d m-dbord"></div>
                  </div>
                </div>
                <GreetingContainer />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PreLogNav;
