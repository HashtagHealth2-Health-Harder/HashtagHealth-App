import { browserHistory } from 'react-router-dom';

export const REQUEST_TWEETS = 'REQUEST_DATA';
export function requestTweets() {
  return {
    type: REQUEST_TWEETS,
  };
}

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

export function fetchTweets(token) {
  return (dispatch) => {
    let apiUrl = 'http://hashtag-health.com:5000/latest';

    dispatch(requestTweets());
    return fetch(apiUrl, {
      method: 'GET',
      mode: 'no-cors',
      header: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          dispatch(receiveTweets(data));
        });
      }
    }).catch((err) => {
      if (err) {
        console.error(`Unable to fetch tweets. Error: ${err}`);
        browserHistory.push('/');
      }
    });
  };
}
