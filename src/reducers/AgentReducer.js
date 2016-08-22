import {
  LOADING_AGENT,
  LOADING_AGENT_DONE,
  SET_AGENT,
  SET_AGENT_ERROR
} from 'actions/Listing/AgentActions';

const initialState = {
  isLoading: false,
  data: null,
  error: ''
};

export function Agent(state = initialState, action = null) {
  switch (action.type) {
    case LOADING_AGENT:
      return _.assign({}, state, {
        isLoading: true
      });
    case LOADING_AGENT_DONE:
      return _.assign({}, state, {
        isLoading: false
      });
    case SET_AGENT:
      return _.assign({}, state, {
        data: action.data,
        error: ''
      });
    case SET_AGENT_ERROR:
      return _.assign({}, state, {
        data: null,
        error: action.data
      });
    default:
      return state;
  }
}
