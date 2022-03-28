import { Grid } from "@mui/material"
import ClimateCard from "compoents/ClimateCard"
import { useAppState } from "contextAPI/DataContext"

const Climates = () => {
  const [{ home: { climates }}, dispatch] = useAppState()
  return (
    <>
      {climates && (
        <Grid container spacing={2} mt={4}>
          {climates.daily.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ClimateCard data={item} index={index + 1} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Climates
