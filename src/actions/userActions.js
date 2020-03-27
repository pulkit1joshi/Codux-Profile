import { FETCH_USER, FETCH_RATINGHIST, FETCH_USUBMISSIONS } from './types';
import { userstatus, userrating, userinfo } from './links';

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

var groupBy = function (data, key) { // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  return data.reduce(function (storage, item) {
    // get the first instance of the key by which we're grouping

    var group = item[key];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];

    // add this item to its group within `storage`
    storage[group].push(item);
    // return the updated storage to the reduce function, which will then loop through the next 
    return storage;
  }, {}); // {} is the initial value of the storage
}

export const fetchUSubmissions = string => dispatch => {
  console.log('Submissions Fetched');
  const url = userstatus + string;
  fetch(url)
    .then(res => res.json())
    .then(submissionData => {
      // .problem.tags
      var groupByProb = function (data, key) { // `data` is an array of objects, `key` is the key (or property accessor) to group by
        // reduce runs this anonymous function on each element of `data` (the `item` parameter,
        // returning the `storage` parameter at the end
        return data.reduce(function (storage, item) {
          // get the first instance of the key by which we're grouping


          let index = 0;

          for (index = 0; index < item.problem[key].length; index++) {



            var group = item.problem[key][index];

            // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
            storage[group] = storage[group] || [];

            // add this item to its group within `storage`
            if (item.verdict === "OK") storage[group].push(item);
          }
          // return the updated storage to the reduce function, which will then loop through the next 
          return storage;
        }, {}); // {} is the initial value of the storage
      }
      let problemsbytags = groupByProb(submissionData.result, "tags");
      let tags = Object.keys(groupByProb(submissionData.result, "tags"));
      let byverdicts = groupBy(submissionData.result, "verdict");
      let verdicts = Object.keys(groupBy(submissionData.result, "verdict"));


      dispatch({
        type: FETCH_USUBMISSIONS,
        payload: submissionData,
        tags: tags,
        byverdict: byverdicts,
        verdicts: verdicts,
        problemsbytags: problemsbytags,
        name: string,
      })
    }
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