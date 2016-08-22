import {
  LOADING_LISTING,
  LOADING_LISTING_DONE,
  SET_LISTING,
  SET_LISTING_ERROR
} from 'actions/Listing/ListingActions';

const initialState = {
  isLoading: false,
  data: null,
  error: ''
};

export function Listing(state = initialState, action = null) {
  switch (action.type) {
    case LOADING_LISTING:
      return _.assign({}, state, {
        isLoading: true
      });
    case LOADING_LISTING_DONE:
      return _.assign({}, state, {
        isLoading: false
      });
    case SET_LISTING:
      return _.assign({}, state, {
        data: action.data,
        error: ''
      });
    case SET_LISTING_ERROR:
      return _.assign({}, state, {
        data: null,
        error: action.data
      });
    default:
      return state;
  }
}
