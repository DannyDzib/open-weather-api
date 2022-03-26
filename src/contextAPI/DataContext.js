import React, { createContext, useContext, useReducer } from "react"
import { object, func } from "prop-types"

export const DataContext = createContext()

export const DataProvider = ({ reducer, initialState = {}, children }) => {
  const value = useReducer(reducer, initialState)
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

DataProvider.propTypes = {
  reducer: func,
  initialState: object,
}

export function useAppState() {
  return useContext(DataContext)
}
