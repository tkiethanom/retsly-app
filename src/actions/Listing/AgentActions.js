import fetch from 'isomorphic-fetch';
import {API_ACCESS_TOKEN} from '../../config';

export const LOADING_AGENT = 'LOADING_AGENT';
export const LOADING_AGENT_DONE = 'LOADING_AGENT_DONE';
export const SET_AGENT = 'SET_AGENT';
export const SET_AGENT_ERROR = 'SET_AGENT_ERROR';

export function loading(){
  return {
    type: LOADING_AGENT
  };
}
export function loadingDone(){
  return {
    type: LOADING_AGENT_DONE
  };
}

export function setAgent(data){
  return {
    type: SET_AGENT,
    data: data
  }
}

export function setError(data){
  return {
    type: SET_AGENT_ERROR,
    data: data
  }
}

export function loadAgent(id) {
  return dispatch => {
    dispatch(loading());
    return fetch('https://rets.io/api/v1/test/agents/'+id+'?access_token=' + API_ACCESS_TOKEN, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(json => {
            if(json.bundle){
              dispatch(setAgent(json.bundle));
            }
            else{
              dispatch(setError('No Listing Agent Found'));
            }
            dispatch(loadingDone());
          });

        } else {
          dispatch(setError('Interal Server Error. We apologize for the inconvenience.'));
          dispatch(loadingDone());
          console.log(response.statusText);
        }
      })
      .catch(error => {
        dispatch(setError('Interal Server Error. We apologize for the inconvenience.'));
        dispatch(loadingDone());
        console.log(error);
      });
  }
}
