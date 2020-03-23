import { FETCH_USER, FETCH_RATINGHIST, FETCH_USUBMISSIONS } from './types';
import {userstatus , userrating, userinfo } from './links';

export const fetchUser = string => dispatch => {
    console.log("User fetched");
    const url = userinfo + string;
    fetch(url)
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

export const fetchUSubmissions = string => dispatch => {
    console.log('Submissions Fetched');
    const url = userstatus + string;
    fetch(url)
      .then(res => res.json())
      .then(submissionData =>
        dispatch({
          type: FETCH_USUBMISSIONS,
          payload: submissionData,
          name: string
        })
      );
}

export const fetchRatingHist = string => dispatch => {
    console.log('Rating History Fetched');
    const url = userrating + string;
    fetch(url)
      .then(res => res.json())
      .then(ratingData =>
        dispatch({
          type: FETCH_RATINGHIST,
          payload: ratingData,
          name: string
        })
      );
}