import { Container, Grid, Typography } from "@mui/material"
import React from "react"
import Booking from "../booking/Booking"

const bookings = [
  {
    id: 1,
    name: "Cavity Protection",
    time: "11:00 AM - 12:00PM",
    space: 5
  },
  {
    id: 2,
    name: "Pediatric Dental",
    time: "06:00 AM - 07:00PM",
    space: 5
  },
  {
    id: 3,
    name: "Oral Surgery",
    time: "07:00 AM - 08:00PM",
    space: 5
  },
  {
    id: 4,
    name: "Oral Surgery",
    time: "07:00 AM - 08:00PM",
    space: 5
  },
  {
    id: 5,
    name: "Oral Surgery",
    time: "07:00 AM - 08:00PM",
    space: 5
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07:00 AM - 08:00PM",
    space: 5
  }
]

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <Typography variant="h5" sx={{ my: 2, color: "info.main" }}>
        Available Appointments on {date.toDateString()}{" "}
      </Typography>

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} date={date} booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  )
}

export default AvailableAppointment
