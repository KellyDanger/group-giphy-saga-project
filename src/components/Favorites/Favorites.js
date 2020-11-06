import React, {Component} from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
    componentDidMount = () => {
        this.getFavGif();
    }

    getFavGif = () => {
        this.props.dispatch({type: 'FETCH_FAV'})
    }
    handleChange = (event) => {
        console.log('event.target.value is', event.target.value, event.target.id);       
        this.props.dispatch({type: 'SET_CATEGORY', payload:{value: event.target.value, id: event.target.id} })
    }

    
    render(){
        return(
            <>
                <p>Favorites Page</p>
                <ul>
                        {/* checks if giphyReducer is not null before mapping and then map through giphyReducer array*/}
                        {this.props.reduxState.favoriteReducer.map((gif) => {
                                // (console.log('gif', gif, gif.url));
                            return <li key={gif.id}>
                                <img src={gif.url} alt={gif.title}/>
                                <label htmlFor="categories">Choose a category</label>
                                <select onChange={this.handleChange} name="categories" id={gif.id}>
                                    <option value=""></option>
                                    <option value={1}>Funny</option>
                                    <option value={2}>Cohort</option>
                                    <option value={3}>Cartoon</option>
                                    <option value={4}>NSFW</option>
                                    <option value={5}>Meme</option>
                                </select>
                            </li>
                        })}
                </ul>
            </>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);