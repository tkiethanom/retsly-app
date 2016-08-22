import fetch from 'isomorphic-fetch';
import {API_ACCESS_TOKEN} from '../../config';

export const LOADING_LISTING = 'LOADING_LISTING';
export const LOADING_LISTING_DONE = 'LOADING_LISTING_DONE';
export const SET_LISTING = 'SET_LISTING';
export const SET_LISTING_ERROR = 'SET_LISTING_ERROR';

export function loading(){
  return {
    type: LOADING_LISTING
  };
}
export function loadingDone(){
  return {
    type: LOADING_LISTING_DONE
  };
}

export function setListing(data){
  return {
    type: SET_LISTING,
    data: data
  }
}

export function setError(data){
  return {
    type: SET_LISTING_ERROR,
    data: data
  }
}

export function loadListing(id) {
  return dispatch => {
    dispatch(loading());
    return fetch('https://rets.io/api/v1/test/listings/'+id+'?access_token=' + API_ACCESS_TOKEN, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
         if (response.status >= 200 && response.status < 300) {
          return response.json().then(json => {
            if(json.bundle){
              dispatch(setListing(json.bundle));
            }
            else{
              dispatch(setError('No Listing Found'));
            }
            dispatch(loadingDone());

            return json;
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
