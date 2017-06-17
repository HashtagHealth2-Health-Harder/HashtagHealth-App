import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './containers/App';

require("!style-loader!css-loader!sass-loader!./stylesheets/main.scss");

render(
  <Router>
    <Route path='/' component={App} />
  </Router>, document.getElementById('app'));
