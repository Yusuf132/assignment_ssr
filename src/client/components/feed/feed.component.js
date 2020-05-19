import React from 'react';

const Feed = (props) => {
    console.log(props);
    const {num_comments, votes, title, url, author, created_at} = props.news;
    const getHours = (date) => {
        return new Date(date).getHours();
    }
    return (
        <div className='feed-container'>
            <div className='feed-comments-votes'>{num_comments}</div>
            <div className='feed-comments-votes'></div>
            <div className='feed-comments-votes votearrow'></div>
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
                <span>
                    [<span> hide </span>]
                </span>
            </div>
        </div>
    )
}

export default Feed;