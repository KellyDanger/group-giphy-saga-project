import React, { Component } from 'react';
import {connect} from 'react-redux';
import Category from '../Category/Category'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Favorites from '../Favorites/Favorites';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Giphy Search!</h1>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/">Home</Link></li>
          <Route exact path="/" component={Category}/>
          <Route path="/favorites" component={Favorites}/>
        </div>
      </Router>


    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(App);
