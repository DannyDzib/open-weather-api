import { _geClimates, _getCities, _getCitiesByName } from "./actionCreators"
import * as types from "./types"

export const getCities = async (dispatch) => {
  dispatch({ type: types.HOME_LOADING })
  const request = await _getCities()
  dispatch({
    type: types.GET_HOME_CITIES,
    payload: request,
  })
}

export const getCitiesByName = async (dispatch, value) => {
  dispatch({ type: types.HOME_LOADING_INPUT })
  const request = await _getCitiesByName(value)
  dispatch({
    type: types.GET_HOME_CITIES_ASYNC,
    payload: request,
  })
}

export const getClimates = async (dispatch, data) => {
  const { lat, long } = data
  dispatch({ type: types.HOME_LOADING })
  const request = await _geClimates(lat, long)
  dispatch({
    type: types.GET_HOME_CLIMATES,
    payload: request,
  })
}
