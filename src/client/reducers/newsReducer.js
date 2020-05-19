
import {FETCH_NEWS, HIDE_FEED, ADD_VOTE,UPDATE_PAGE, UPDATE_PAGE_LOAD} from '../actions';
import {hideFeed, updatedNews, addVote, pageNumber} from './newsFeed.utils';

const INITIAL_STATE = {
  newsList: [],
  updateList: [],
  paginationConfig: {
    page: 0,
    nbPages:50,
    hitsPerPage:20
  }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_NEWS:
        return {
          ...state,
          newsList: updatedNews(action.payload.data.hits, state.updateList)
        };
      case HIDE_FEED:
      return {
        ...state,
        updateList: hideFeed(state.updateList, action.payload)
      }
      case ADD_VOTE:
      return {
        ...state,
        updateList: addVote(state.updateList, action.payload)
      }

      case UPDATE_PAGE_LOAD:
       return {
        ...state,
        paginationConfig: {
          page:action.payload.page,
          nbPages: action.payload.nbPages,
          hitsPerPage: action.payload.hitsPerPage,
        }
      };
      case UPDATE_PAGE:
      return {
        ...state,
        paginationConfig: {
          ...state.paginationConfig,
          page:pageNumber({...action.payload, ...state.paginationConfig.nbPages})
        }
      }
      default:
        return state;
    }
  };


  