import React, { Component } from 'react';
import {connect} from 'react-redux';
import Category from '../Category/Category'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Category/>
      </div>
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(App);
