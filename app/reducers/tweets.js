import { REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions';

export function tweets(state = {
  tweets: null,
  isFetching: false,
  loaded: false,
}, action) {
  switch (action.type) {
    case REQUEST_TWEETS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_TWEETS:
      return Object.assign({}, state, {
        tweets: action.tweets,
        isFetching: false,
        loaded: true,
      });
    default:
      return state;
  }
}