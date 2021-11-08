import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"

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

const BookingModal = ({ openBooking, date, handleBookingClose, booking }) => {
  const { name, time } = booking

  // submit handler //
  const handleBookSubmit = (e) => {
    alert("SUBMITTED !!")

    // collect data from the form & send to the database
    e.preventDefault()
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
          <Box
            component="form"
            onSubmit={handleBookSubmit}
            sx={{
              "& > :not(style)": { m: 1, width: "90%" }
            }}
            noValidate
            autoComplete="off">
            <TextField
              disabled
              id="filled-basic"
              label="Time"
              variant="filled"
              defaultValue={time}
            />
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField
              id="filled-basic"
              label="Phone"
              variant="filled"
              type="number"
            />
            <TextField
              // disabled
              id="filled-basic"
              variant="filled"
              type="date"
              defaultValue={date.toDateString()}
            />
            <Button type="sumbit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default BookingModal
