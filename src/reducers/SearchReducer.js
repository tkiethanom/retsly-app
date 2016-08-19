import {
  SEARCHING,
  SEARCHING_DONE,
  SET_SEARCH_RESULTS,
  SET_SEARCH_ERROR
} from 'actions/Search/SearchActions';

const initialState = {
  isSearching: false,
  results: [],
  error: ''
};

export function Search(state = initialState, action = null) {
  switch (action.type) {
    case SEARCHING:
      return _.assign({}, state, {
        isSearching: true
      });
    case SEARCHING_DONE:
      return _.assign({}, state, {
        isSearching: false
      });
    case SET_SEARCH_RESULTS:
      return _.assign({}, state, {
        results: action.data,
        error: ''
      });
    case SET_SEARCH_ERROR:
      return _.assign({}, state, {
        results: [],
        error: action.data
      });
    default:
      return state;
  }
}
