import React, {Component} from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
    render(){
        return(
            <p>Favorites Page</p>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);