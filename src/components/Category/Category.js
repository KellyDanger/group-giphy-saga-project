import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryItem from '../CategoryItem/CategoryItem';

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
                <button onClick={()=>this.submitSearch()}>Search</button>
                <ul>
                        {/* checks if giphyReducer is not null before mapping and then map through giphyReducer array*/}
                        {this.props.reduxState.giphyReducer != null && this.props.reduxState.giphyReducer.map((gif) => {
                        // return (console.log('gif', gif, gif.url));
                            return <CategoryItem key={gif.id} url={gif.images.original.url} title={gif.title}/>
                        })}
                </ul>
            </>

            
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Category);