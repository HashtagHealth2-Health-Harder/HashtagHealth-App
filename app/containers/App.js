import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Map from '../components/Map';

export class App extends Component {
  render() {
    return (
      <div>
        {<Header />}
        {<Map />}
      </div>
    );
  }
}

export default connect()(App);
