import {
  LOADING_OFFICE,
  LOADING_OFFICE_DONE,
  SET_OFFICE,
  SET_OFFICE_ERROR
} from 'actions/Listing/OfficeActions';

const initialState = {
  isLoading: false,
  data: null,
  error: ''
};

export function Office(state = initialState, action = null) {
  switch (action.type) {
    case LOADING_OFFICE:
      return _.assign({}, state, {
        isLoading: true
      });
    case LOADING_OFFICE_DONE:
      return _.assign({}, state, {
        isLoading: false
      });
    case SET_OFFICE:
      return _.assign({}, state, {
        data: action.data,
        error: ''
      });
    case SET_OFFICE_ERROR:
      return _.assign({}, state, {
        data: null,
        error: action.data
      });
    default:
      return state;
  }
}
