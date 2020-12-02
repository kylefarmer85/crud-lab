import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return <Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    })
  }

  render() {
    return(
      <ul>
        Restaurants:
      { this.renderRestaurants() }
      </ul>
    );
  }
};

export default Restaurants;