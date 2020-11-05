import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
    render() {
        return(
            <h1>Category</h1>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Category);