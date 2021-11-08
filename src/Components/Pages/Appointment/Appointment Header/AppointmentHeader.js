import { Container, Grid, Typography } from "@mui/material"
import React from "react"
import chair from "../../../../images/chair.png"
import Calender from "../../Shared/Calender/Calender"

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ margin: "5px 0" }} variant="h4">
            Appointment
          </Typography>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppointmentHeader
