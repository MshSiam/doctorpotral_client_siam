import { BrowserRouter, Switch, Route } from "react-router-dom"
import ReactDOM from "react-dom"
import "./App.css"
import About from "./Components/Pages/About/About"
import AppointmentPage from "./Components/Pages/Appointment/AppointmentPage"
import Home from "./Components/Pages/Home/Home"
import Login from "./Components/Pages/Login page/Login"
import Register from "./Components/Pages/Login page/Register"
import Navigation from "./Components/Pages/Shared/Navigation/Navigation"
import AuthProvider from "./context/AuthProvider"
import PrivateRoute from "./Components/Pages/Login page/PrivateRoute/PrivateRoute"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <AppointmentPage></AppointmentPage>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
