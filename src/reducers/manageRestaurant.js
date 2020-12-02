import { v4 as uuidv4 } from 'uuid';

export default function manageRestaurants(state= {
  restaurants: [],
  reviews: []
}, action) {

  let updatedRestaurants;

  switch (action.type) {
  
    case "ADD_RESTAURANT":

      const restaurant = {text: action.text, id: uuidv4()}
      return {
        ...state, 
        restaurants: [...state.restaurants, restaurant]
      }
      
    case "DELETE_RESTAURANT":
        updatedRestaurants = state.restaurants.filter(r => r.id !== action.id)   
      return {
        ...state,
        restaurants: updatedRestaurants
      }

    default:
      return state  
  }
}
