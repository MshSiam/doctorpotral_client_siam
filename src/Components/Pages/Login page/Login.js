import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography
} from "@mui/material"
import React, { useState } from "react"
import login from "../../../images/login.png"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/system"
import { NavLink, useLocation, useHistory } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { user, loginUser, isLoading, authError } = useAuth()

  const location = useLocation()
  const history = useHistory()

  // onchange
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    // console.log(field, value)
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }

  //   handle Submit
  const handleSubmit = (e) => {
    // alert("Lgoed In ")
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault()
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginTop: "180px" }} variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" }
              }}
              noValidate
              autoComplete="off"> */}
            <TextField
              sx={{ width: "60%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
              type="email"
            />
            <TextField
              sx={{ width: "60%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <br />
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert
                style={{
                  width: "60%",
                  margin: "0 auto",
                  py: 2,
                  textAlign: "center"
                }}
                severity="success">
                Loged In Successfully
              </Alert>
            )}

            <Button
              sx={{ width: "60%", m: 1 }}
              type="submit"
              variant="contained">
              Login
            </Button>
            <h3>Or</h3>
            <Button variant="contained">SignIn With Google</Button>
            {/* </Box> */}
          </form>
          <br />
          <Typography variant="h7">
            New User ? Please,{" "}
            <NavLink to="/register">
              <Button>Register</Button>
            </NavLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "350px", marginTop: "80px" }}
            src={login}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
