import React from "react"
import { experimentalStyled as styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import Service from "../Service/Service"
import fluoride from "../../../../images/fluoride.png"
import cavity from "../../../../images/cavity.png"
import whitening from "../../../../images/cavity.png"

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "lorem ipsum dolor amet consectetur culpa enim! Voluptais aliquid expedita saepe accusantiuym itaque ducimus rem voluptas",
    img: fluoride
  },
  {
    name: "Cavity Filling",
    description:
      "lorem ipsum dolor amet consectetur culpa enim! Voluptais aliquid expedita saepe accusantiuym itaque ducimus rem voluptas",
    img: cavity
  },
  {
    name: "Teeth Whitening",
    description:
      "lorem ipsum dolor amet consectetur culpa enim! Voluptais aliquid expedita saepe accusantiuym itaque ducimus rem voluptas",
    img: whitening
  }
]

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant="h6" component="div">
            OUR SERVICES
          </Typography>
          <Typography
            sx={{ mb: 4 }}
            color="blueviolet"
            variant="h4"
            component="div">
            Services We Provides
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service) => (
              <Service key={service.name} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Services
