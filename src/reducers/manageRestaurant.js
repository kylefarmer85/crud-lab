import { v4 as uuidv4 } from 'uuid';

export default function manageRestaurants(state= {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {
  
    case "ADD_RESTAURANT":

      const restaurant = {text: action.text, id: uuidv4()}
      return {
        ...state, 
        restaurants: [...state.restaurants, restaurant]
      }
      
    case "DELETE_RESTAURANT":

      const updatedRestaurants = state.restaurants.filter(r => r.id !== action.id)   
      return { ...state,
        restaurants: updatedRestaurants 
      }

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: uuidv4() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':

      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }  

    default:
      return state  
  }
}
