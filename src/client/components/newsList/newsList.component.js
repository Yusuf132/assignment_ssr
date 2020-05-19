import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, changePage } from '../../actions';
import Feed from '../feed/feed.component';
import {withRouter} from 'react-router';

class NewsList extends Component {
  componentDidMount() {
    let pageString = this.props.location.search;
    const pageCount = parseInt(pageString.split('=')[1]);
    this.props.updatePage({pageNum:pageCount});
    this.props.fetchNews(pageCount);
  }

  renderNews() {
    return this.props.news.map(news => {
      return <li key={news.objectID}>{news.author}</li>;
    });
  }
  componentDidUpdate() {
    
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

const mapStateToProps= (state) => ({
  news: state.news.newsList,
  page: state.news.paginationConfig.page
})

function loadData(store) {
    return store.dispatch(fetchNews());
}
  
export { loadData };
const mapDispatchToProps = dispatch => ({
  fetchNews:(page) => dispatch(fetchNews(page)),
  updatePage:(page)=>dispatch(changePage(page))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsList));