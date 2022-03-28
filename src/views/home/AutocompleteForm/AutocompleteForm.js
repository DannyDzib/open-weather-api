import React from "react"
import AutoComplete from "components/AutoComplete"
import { useAppState } from "contextAPI/DataContext"
import { getClimates, getCitiesByName } from "contextAPI/home/actions"
import { home as constants } from "texts"

const AutocompleteForm = () => {
  const [{ home }, dispatch] = useAppState()
  const { cities, loadingInput } = home

  const searchClimates = (item) => {
    if (item) getClimates(dispatch, item)
  }
  const handleInput = (value) => {
    if (value) getCitiesByName(dispatch, value)
  }
  
  return (
    <>
      {cities && (
        <AutoComplete
          options={cities}
          onChange={searchClimates}
          handleInput={handleInput}
          label={constants.HOME_AUTOCOMPLETE_INPUT_LABEL}
          loading={loadingInput}
        />
      )}
    </>
  )
}

export default AutocompleteForm
