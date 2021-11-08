import React from "react"
import AppointmentBanner from "./Appointmant banner/AppointmentBanner"
import Banner from "./Banner/Banner"
import Services from "./services/Services"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  )
}

export default Home
