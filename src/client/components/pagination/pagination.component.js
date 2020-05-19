import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
const Pagination = ({history}) => {
    const left = () => {
        console.log('left');
        history.push('/search?page=2');
    }
    const right = () => {
            console.log('right');
            history.push('/search?page=3')
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


export default withRouter(connect(null)(Pagination));