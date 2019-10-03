import React from "react";
import { withRouter } from "react-router-dom";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    if (this.props.type === "topnews") {
      this.props.fetchNews();
      //  debugger
    } else {
      this.props.fetchNews();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ articles: nextProps.articles });
  }
  render() {
    return this.state.articles ? (
      <div className="news-container">
        <div className="news-section-header">
          {this.props.type === "topnews" ? <h1>Top News</h1> : <h1>News</h1>}
        </div>
        {this.state.articles.map((ele, idx) => {
          let date = new Date(ele.publishedAt);
          return (
            <div className="news-container-inner">
              <a href={ele.url}>
                {ele.source.id ? (
                  <div className="news-source">{ele.source.id}</div>
                ) : (
                  <div className="news-source">{ele.source.name}</div>
                )}
                <div className="news-date"> {date.toDateString()}</div>
                <img src={ele.urlToImage} />
              </a>
            </div>
          );
        })}
      </div>
    ) : (
      <div />
    );
  }
}

export default withRouter(News);
