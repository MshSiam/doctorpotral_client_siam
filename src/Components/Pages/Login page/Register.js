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
import { NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

const Register = () => {
  const [loginData, setLoginData] = useState({})
  const { registerUser, isLoading, user, authError } = useAuth()
  // onchange
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    // console.log(field, value)
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
    console.log(newLoginData)
  }

  //   handle Submit
  const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not matched")
      return
    }
    registerUser(loginData.email, loginData.password)
    // alert("Lgoed In ")
    e.preventDefault()
  }

  //  progress //
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginTop: "180px" }} variant="h5">
            Register
          </Typography>
          {!isLoading && (
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
              <TextField
                sx={{ width: "60%", m: 1 }}
                id="standard-basic"
                label="Confirm Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard"
              />
              <br />
              <Typography variant="h7">
                Already have an account ? Please,{" "}
                <NavLink to="/login">
                  <Button>Login</Button>
                </NavLink>
              </Typography>
              <br />
              <Button
                sx={{ width: "60%", m: 1 }}
                type="submit"
                variant="contained">
                Login
              </Button>
              {/* </Box> */}
            </form>
          )}
          {isLoading && (
            <CircularProgress
              variant="determinate"
              value={progress}></CircularProgress>
          )}
          <br />
          {user?.email && (
            <Alert
              style={{ width: "60%", margin: "0 auto" }}
              severity="success">
              User Created Successfully
            </Alert>
          )}
          {authError && (
            <Alert style={{ width: "60%", margin: "0 auto" }} severity="error">
              {authError}
            </Alert>
          )}
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

export default Register
