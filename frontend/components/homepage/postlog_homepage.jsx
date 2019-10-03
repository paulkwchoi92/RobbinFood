import React from "react";
import WatchListsContainer from '../watchlists/watchlist_container'
import { Link } from "react-router-dom";
import TopNewsContainer from '../news/top_news_container'
class PostLogHome extends React.Component {
  render() {
    return (
      <div className="postlog-home-container">
        <div className="postlog-home-center">
          <div className="postlog-home-right">

          </div>
          <div className="ptlog-home-lft">
            <div className="watchlists-outer">
              <WatchListsContainer />
              {/* <TopNewsContainer /> */}
              </div>
          </div>
       </div>
       
      </div>
    );
  }
}

export default PostLogHome;
