import React, { Component } from 'react';
import { connect } from 'react-redux';

class Catergory extends Component {
    render() {
        return(
            
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Catergory);