
import {FETCH_NEWS, HIDE_FEED} from '../actions';
import {hideFeed} from './newsFeed.utils';

const INITIAL_STATE = {
  newsList: [],
  updateList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_NEWS:
        return {
          ...state,
          newsList: action.payload.data.hits
        };
      case HIDE_FEED:
      return {
        ...state,
        newsList: hideFeed(state.newsList, action.payload)
      }  
      default:
        return state;
    }
  };