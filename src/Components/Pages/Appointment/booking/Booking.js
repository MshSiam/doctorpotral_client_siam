import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import Paper from "@mui/material/Paper"
import BookingModal from "../bookingModal/BookingModal"

const Booking = ({ booking, date }) => {
  const { id, name, time, space } = booking
  const [openBooking, setOpen] = React.useState(false)
  const handleBookingOpen = () => setOpen(true)
  const handleBookingClose = () => setOpen(false)
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={0} sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ color: "warning.main" }}>
            {name}
          </Typography>
          <Typography variant="h6" style={{ color: "bule" }}>
            {time}
          </Typography>
          <Typography variant="p">Space Available : {space}</Typography>
          <br />
          <Button onClick={handleBookingOpen} variant="contained">
            Book Apointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}></BookingModal>
    </>
  )
}

export default Booking
