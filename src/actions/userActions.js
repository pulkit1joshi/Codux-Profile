import { FETCH_USER } from './types';

export const fetchUser = string => dispatch => {
    console.log("Actionfetched");
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