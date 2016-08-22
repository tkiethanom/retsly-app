import fetch from 'isomorphic-fetch';
import {API_ACCESS_TOKEN} from '../../config';

export const LOADING_OFFICE = 'LOADING_OFFICE';
export const LOADING_OFFICE_DONE = 'LOADING_OFFICE_DONE';
export const SET_OFFICE = 'SET_OFFICE';
export const SET_OFFICE_ERROR = 'SET_OFFICE_ERROR';

export function loading(){
  return {
    type: LOADING_OFFICE
  };
}
export function loadingDone(){
  return {
    type: LOADING_OFFICE_DONE
  };
}

export function setOffice(data){
  return {
    type: SET_OFFICE,
    data: data
  }
}

export function setError(data){
  return {
    type: SET_OFFICE_ERROR,
    data: data
  }
}

export function loadOffice(id){
  return dispatch => {
    dispatch(loading());
    if(id){
      return fetch('https://rets.io/api/v1/test/offices/'+id+'?access_token=' + API_ACCESS_TOKEN, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(json => {
            if(json.bundle){
              dispatch(setOffice(json.bundle));
            }
            else{
              dispatch(setError('No Listing Office Found'));
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
}