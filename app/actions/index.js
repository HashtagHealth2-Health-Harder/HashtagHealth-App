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
    // TODO: figure out endpoint and any required auth (i.e. access token)
    let apiUrl = 'some/url';
    let accessToken = 'some/token/';
    
    dispatch(requestTweets());
    return fetch(apiUrl, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json' 
      },
    }).then((response) => {
      // TODO: figure out how the data is coming in
      dispatch(receiveTweets(response));
    }).catch((err) => {
      if (err) {
        // TODO: figure out a way to handle error
        console.error(`Unable to fetch tweets. Error: ${err}`);
        browserHistory.push('/');
      }
    });
  };
}