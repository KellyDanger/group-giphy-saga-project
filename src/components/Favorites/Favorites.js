import React, {Component} from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
    componentDidMount = () => {
        this.getFavGif();
    }

    getFavGif = () => {
        this.props.dispatch({type: 'FETCH_FAV'})
    }

    
    render(){
        return(
            <>
                <p>Favorites Page</p>
                <ul>
                        {/* checks if giphyReducer is not null before mapping and then map through giphyReducer array*/}
                        {this.props.reduxState.favoriteReducer.map((gif) => {
                        // return (console.log('gif', gif, gif.url));
                            return <li key={gif.id}>
                                <img src={gif.url} alt={gif.title}/>
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