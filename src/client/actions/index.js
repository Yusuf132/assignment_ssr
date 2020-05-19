import axios from 'axios';

export const FETCH_NEWS = "FETCH_NEWS";

export const HIDE_FEED = "HIDE_FEED";

export const ADD_VOTE = "ADD_VOTE";


export const UPDATE_PAGE = "UPDATE_PAGE";

export const UPDATE_PAGE_LOAD = "UPDATE_PAGE_LOAD";

export const fetchNews = (page) => async dispatch => {
    page = page? page: 0;
    const url = 'http://hn.algolia.com/api/v1/search?page=' + page;
    const res = await axios.get(url);
   // console.log(res)

    await dispatch({
        type: FETCH_NEWS,
        payload: res
    });

    dispatch({
        type: UPDATE_PAGE_LOAD,
        payload: res.data
    })
}

export const hideFeed = item => ({
    type: HIDE_FEED,
    payload:item
})

export const addVote = item => ({
    type: ADD_VOTE,
    payload:item
})

export const changePage = item => ({
    type: UPDATE_PAGE,
    payload:item
})