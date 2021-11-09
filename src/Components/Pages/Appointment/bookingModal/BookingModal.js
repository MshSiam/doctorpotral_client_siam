import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import useAuth from "../../../../hooks/useAuth"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking
  const { user } = useAuth()

  const initialInfo = {
    patientName: user.displayName,
    emai: user.email,
    phone: "",
    date: ""
  }
  const [bookingInfo, setBookingInfo] = useState(initialInfo)

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value

    const newInfo = { ...bookingInfo }
    newInfo[field] = value
    // console.log(newInfo)
    setBookingInfo(newInfo)
  }

  // submit handler //
  const handleBookSubmit = (e) => {
    e.preventDefault()
    // collect data from the form
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    console.log(appointment)

    //send to the database

    handleBookingClose()
  }
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ my: 2, ml: 15 }}
            component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
              sx={{ width: "90%", margin: 1 }}
              disabled
              id="filled-basic"
              label="Time"
              variant="filled"
              defaultValue={time}
            />
            <TextField
              sx={{ width: "90%", margin: 1 }}
              id="filled-basic"
              label="Name"
              onBlur={handleOnBlur}
              variant="filled"
              name="patientName"
              defaultValue={user.displayName}
            />
            <TextField
              sx={{ width: "90%", margin: 1 }}
              id="filled-basic"
              label="Email"
              onBlur={handleOnBlur}
              variant="filled"
              name="email"
              defaultValue={user.email}
            />
            <TextField
              sx={{ width: "90%", margin: 1 }}
              id="filled-basic"
              label="Phone"
              onBlur={handleOnBlur}
              name="phone"
              variant="filled"
              type="number"
            />
            <TextField
              sx={{ width: "90%", margin: 1 }}
              // disabled
              id="filled-basic"
              onBlur={handleOnBlur}
              variant="filled"
              type="date"
              name="date"
              defaultValue={date.toDateString()}
              required
            />

            <Button
              sx={{ width: "90%", margin: 1 }}
              type="sumbit"
              variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default BookingModal
