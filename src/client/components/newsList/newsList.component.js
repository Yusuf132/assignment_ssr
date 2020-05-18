import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';

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
        Here's a big list of news:
        <ul>{this.renderNews()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news };
}

function loadData(store) {
    return store.dispatch(fetchNews());
  }
  
export { loadData };
export default connect(mapStateToProps, { fetchNews })(NewsList);