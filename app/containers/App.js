import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentContainer from 'terra-content-container';
import Header from './Header';
import Map from '../components/Map';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export class App extends Component {
  render() {
    return (
      <ContentContainer>
        <Header />
        <Map />
      </ContentContainer>
    );
  }
}

export default connect()(App);
