import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './containers/App';

require("!style-loader!css-loader!sass-loader!./stylesheets/main.scss");

render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Route path='/' component={App} />
    </Router>
  </Provider>, document.getElementById('app'));
