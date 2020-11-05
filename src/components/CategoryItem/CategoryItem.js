import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryItem extends Component {
    state = {
        category: ""
    }

  handleClick = () => {
    console.log('handleclick')
    //dispatch 
    this.props.dispatch({
        type: 'ADD_FAVORITE',
        payload: {
            category: this.state.category,
            title: this.props.title,
            url: this.props.url
        }
    });
  }

    render() {

        return (        
        <li key={this.props.key}>
            <img src={this.props.url} alt={this.props.title} />
            <button onClick={this.handleClick}>Add To Favorite</button>
        </li>         
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CategoryItem);