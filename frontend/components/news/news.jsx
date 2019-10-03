import React from "react";

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
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ articles: nextProps.articles });
  }
  render() {
    debugger
    return this.state.articles ? (
      <div className="news-container">
        {this.state.articles.map((ele, idx) => {
          let date = new Date(ele.publishedAt);
          return <div className="news-container-inner">
            <a href={ele.url}>
              {ele.source.id ? (
                <div className="news-source">{ele.source.id}</div>
              ) : (
                <div className="news-source">{ele.source.name}</div>
              )}
              <div className="news-date"> {date.toDateString()}</div>
              <img src={ele.urlToImage} />
            </a>
          </div>;
        })}
      </div>
    ) : (
      <div />
    );
  }
}

export default News;
