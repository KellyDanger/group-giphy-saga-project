import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    submitSearch = () => {
        this.props.dispatch({
            type: 'FETCH_GIF',
            payload: {search: this.state.search}
        });
    }

    render() {
        return(
            <>
            <h1>Category</h1>
            <input onChange={this.handleChange} value={this.state.search} type="text"/>
            <button onClick={this.submitSearch}>Search</button>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Category);