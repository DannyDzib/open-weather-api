import * as types from "./types"
const intialState = {
  home: {
    loading: false,
    loadingInput: false,
    cities: [],
    climates: [],
  },
}
const homeReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case types.HOME_LOADING:
      return {
        ...state,
        home: {
          ...state.home,
          loading: true,
        },
      }
    case types.HOME_LOADING_INPUT:
      return {
        ...state,
        home: {
          ...state.home,
          loadingInput: true,
        },
      }
    case types.GET_HOME_CITIES:
      return {
        ...state,
        home: {
          loading: false,
          cities: action.payload,
        },
      }
    case types.GET_HOME_CITIES_ASYNC:
      return {
        ...state,
        home: {
          loadingInput: false,
          cities: action.payload,
        },
      }
    case types.GET_HOME_CLIMATES:
      return {
        ...state,
        home: {
          ...state.home,
          loading: false,
          climates: action.payload,
        },
      }
    default:
      return state
  }
}

export default homeReducer
