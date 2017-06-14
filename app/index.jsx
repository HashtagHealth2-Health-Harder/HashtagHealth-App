import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p style={{fontSize:'42px'}}>#HashtagHealth</p>;
  }
}

render(<App/>, document.getElementById('app'));
