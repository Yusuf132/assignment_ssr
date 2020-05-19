import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import Feed from '../feed/feed.component';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews() {
    return this.props.news.map(news => {
      return <li key={news.objectID}>{news.author}</li>;
    });
  }

  render() {
    return (
      <div className='news-list'>
      {
        this.props.news.map((news) => (
           news.hide? null : <Feed key={news.objectID} news={news}></Feed>
        ))
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news.newsList };
}

function loadData(store) {
    return store.dispatch(fetchNews());
  }
  
export { loadData };
export default connect(mapStateToProps, { fetchNews })(NewsList);