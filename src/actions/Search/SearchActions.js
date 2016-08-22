import fetch from 'isomorphic-fetch';
import {API_ACCESS_TOKEN} from '../../config';

export const SEARCHING = 'SEARCHING';
export const SEARCHING_DONE = 'SEARCHING_DONE';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';

export function searching(){
  return {
    type: SEARCHING
  };
}
export function searchingDone(){
  return {
    type: SEARCHING_DONE
  };
}

export function setSearchResults(data){
  return {
    type: SET_SEARCH_RESULTS,
    data: data
  }
}

export function setSearchError(data){
  return {
    type: SET_SEARCH_ERROR,
    data: data
  }
}

export function search(search) {
  return dispatch => {
    dispatch(searching());
    fetch('https://rets.io/api/v1/test/listings?access_token=' + API_ACCESS_TOKEN + '&limit=20&near=' + search, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(json => {
            if(json.bundle && json.bundle.length){
              dispatch(setSearchResults(json.bundle));
            }
            else{
              dispatch(setSearchError('No Listings Found'));
            }

            dispatch(searchingDone());
          });
        } else {
          dispatch(setSearchError('Interal Server Error. We apologize for the inconvenience.'));
          dispatch(searchingDone());
          console.log(response.statusText);
        }
      })
      .catch(error => {
        dispatch(setSearchError('Interal Server Error. We apologize for the inconvenience.'));
        dispatch(searchingDone());
        console.log(error);
      });
  }
}