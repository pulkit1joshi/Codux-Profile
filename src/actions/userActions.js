import { FETCH_USER, FETCH_RATINGHIST } from './types';

export const fetchUser = string => dispatch => {
    console.log("User fetched");
    fetch(string)
      .then(res => res.json())
      .then(userData =>
        dispatch({
          type: FETCH_USER,
          payload: userData,
          userExists: 1
        })
      )
      .catch(error => {
        dispatch({
            type: FETCH_USER,
            payload: error,
            userExists: 0
          })
    });
  };

export const fetchRatingHist = string => dispatch => {
    console.log('Rating History Fetched');
    fetch(string)
      .then(res => res.json())
      .then(ratingData =>
        dispatch({
          type: FETCH_RATINGHIST,
          payload: ratingData,
        })
      );
}