import React from "react"
import chair from "../../../../images/chair.png"
import bg from "../../../../images/bg.png"
import Grid from "@mui/material/Grid"
import { Button, Typography, Container } from "@mui/material"
import { Box } from "@mui/system"

const bannerBg = {
  background: `url(${bg})`
}

const verticalCenter = {
  display: "flex",
  alignItmes: "center",
  // height: 450
  marginTop: "40px"
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left", ml: 2 }}
          xs={12}
          md={5}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Start Here
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: 13, fontWeight: 300, color: "gray", my: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              exercitationem ad! Delectus odit voluptates ipsam. Neque porro
              ducimus vero illum veniam officia explicabo accusantium mollitia,
              sequi, excepturi nobis sit repellendus!
            </Typography>
            <Typography sx={{ my: 2 }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#5CE7ED" }}>
                Get Appointment
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={7}>
          <img style={{ width: "450px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner
