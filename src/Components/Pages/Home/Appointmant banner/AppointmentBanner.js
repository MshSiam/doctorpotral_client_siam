import React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import doctor from "../../../../images/doctor.png"
import bg from "../../../../images/appointment-bg.png"
import { Button, Typography } from "@mui/material"

const appointmentBg = {
  background: `url(${bg})`,
  marginTop: 150,
  backgroundColor: "rgba(45,58,78, .9)",
  backgroundBlendMode: "darken, luminosity"
  //   backgroundPosition: "center"
}

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left"
          }}>
          <Box>
            <Typography
              sx={{ mb: 5 }}
              style={{ color: "#5CE7ED", fontWeight: "bold" }}
              variant="h5">
              Appointment
            </Typography>
            <Typography sx={{ mb: 5 }} style={{ color: "white" }} variant="h3">
              Make an Appointment Today
            </Typography>
            <Typography
              sx={{ mb: 3 }}
              style={{ color: "white", marginTop: "2" }}
              variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              vero hic quasi placeat quia unde corrupti cupiditate magni fugiat
              optio! wada da.
            </Typography>
            <Typography>
              <Button
                sx={{ mt: 3 }}
                style={{ background: "#5CE7ED" }}
                variant="contained">
                Learn More
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AppointmentBanner
