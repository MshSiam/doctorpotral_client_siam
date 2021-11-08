import React from "react"
import Navigation from "../Shared/Navigation/Navigation"
import AppointmentHeader from "./Appointment Header/AppointmentHeader"
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment"

const AppointmentPage = () => {
  const [date, setDate] = React.useState(new Date())

  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  )
}

export default AppointmentPage
