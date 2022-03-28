import React from "react"
import sx from "./styles"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"

const AutoComplete = (props) => {
  const {
    options = [],
    onChange,
    label,
    sxProps = {},
    handleInput,
    loading,
  } = props

  return (
    <Autocomplete
      freeSolo
      sx={{ ...sx.autocomplete, ...sxProps }}
      open={loading}
      getOptionLabel={(option) => option.displiday || option.ascii_display}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      onInputChange={(_, value) => {
        handleInput(value)
      }}
      options={options || []}
      loading={loading}
      key={(option) => option.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.displiday || option.ascii_display}
        </li>
      )}
    />
  )
}

export default AutoComplete
