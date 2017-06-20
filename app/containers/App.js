import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentContainer from 'terra-content-container';
import { fetchTweets } from '../actions';
import Map from '../components/Map';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.dispatch(fetchTweets());
  }
  
  render() {    
    return (
      <ContentContainer>
        <div className="site-header">
          <p className="site-title">#HASHTAG-HEALTH</p>
        </div>
        <Map data={this.props.tweets} />
      </ContentContainer>
    );
  }
}

function mapStateToProps(state) {
  const tweets = state.tweets;
  return {
    tweets
  }
}

export default connect(mapStateToProps)(App);
