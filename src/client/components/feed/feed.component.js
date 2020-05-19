import React from 'react';
import { connect } from 'react-redux';
import { hideFeed, fetchNews, addVote } from '../../actions';
const Feed = ({news, hide, fetch, add, page}) => {
    const {num_comments, votes, title, url, author, created_at} = news;
    const getHours = (date) => {
        return new Date(date).getHours();
    }
    return (
        <div className='feed-container'>
            <div className='feed-comments-votes'>{num_comments}</div>
            <div className='feed-comments-votes count'>{votes}</div>
            <div className='feed-comments-votes votearrow'
                onClick= {()=> {add(news); fetch(page)}}
            ></div>
            <div className="feed-details">
                <span className='feed-title'>
                    {title}
                </span>
                <span className="comhead">
                {
                    url? (<span>(<a
                        href={url}>
                        <span className="sitestr">
                            {url.split('//')[1].split('/')[0].split('www.')[1]}
                        </span>
                    </a>)</span>): ''
                }
                </span>
                <span className='feed-author'>
                   <span>by</span> {author}
                </span>
                <span className='feed-created'>
                    {getHours(created_at)}<span>hours ago</span>
                </span>
                <span className='feed-hide'>
                    [<span onClick = {()=> {hide(news); fetch(page)}}> hide </span>]
                </span>
            </div>
        </div>
    )
}

const mapDispatchProps = dispatch =>({
    hide:(news)=> dispatch(hideFeed(news)),
    fetch: (page) => dispatch(fetchNews(page)),
    add: (news) => dispatch(addVote(news))
})
const mapStateToProps= (state) => ({
    page: state.news.paginationConfig.page
  })

export default connect(mapStateToProps, mapDispatchProps)(Feed);