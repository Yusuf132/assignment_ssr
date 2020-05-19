import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { fetchNews, changePage } from '../../actions';
const Pagination = ({history, page, changePage, fetchNews}) => {
    const left = () => {
        let pageNumber = (page>0? page-1: 0);
        let url = '/search?page=' + pageNumber;
        fetchNews(pageNumber);
        history.push(url);
    }
    const right = () => {
        let pageNumber = (page>0? page+1: 0);
        let url = '/search?page=' + pageNumber;
        fetchNews(pageNumber);
        history.push(url);
    }
    return (
        <div>
        <div className='pagination-container'>
        <div className='left'
            onClick={left}
            >
            <span>Previous</span>
        </div>
        <span>|</span>
        <div className='next'
            onClick={right}
        >
            <span>Next</span>
        </div>
        </div>
        </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    fetchNews:(page) => dispatch(fetchNews(page)),
    updatePage:(page)=>dispatch(changePage(page))
  })
const mapStateToProps= (state) => ({
    page: state.news.paginationConfig.page
  })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pagination));