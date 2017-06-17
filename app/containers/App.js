import React, { Component } from 'react';
import Header from './Header';
import Map from '../components/Map';

export default class App extends Component {
  render() {
    return (
      <div>
        {<Header />}
        {<Map />}
      </div>
    );
  }
}
