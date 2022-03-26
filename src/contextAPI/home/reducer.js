import * as types from "./types";

const homeReducer = (state,action = {}) =>{
  switch (action) {
    case types.GET_CLIMATES:
      return{
        ...state,
        countries: 'hi'
      }
  
    default:
      return state
  }
}

export default homeReducer

