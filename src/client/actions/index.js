import axios from 'axios';

export const FETCH_NEWS = "FETCH_NEWS";

export const HIDE_FEED = "HIDE_FEED";

export const fetchNews = () => async dispatch => {
    const res = await axios.get('http://hn.algolia.com/api/v1/search');
   // console.log(res)

    dispatch({
        type: FETCH_NEWS,
        payload: res
    });
}

export const hideFeed = item => ({
    type: HIDE_FEED,
    payload:item
})