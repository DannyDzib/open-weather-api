import { Autocomplete, TextField } from "@mui/material"

const AutoComplete = (props) => {
  const { option,onChange, label } = props
  return (
    <Autocomplete
      disablePortal
      onChange={(event, value) => onChange(value)}
      options={option || []}
      getOptionLabel={(option) => option.display}
      sx={{ width: { xs: "100%", md: 300 } }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

export default AutoComplete
