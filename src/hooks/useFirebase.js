import { useEffect, useState } from "react"
import initializeFirebase from "../Components/Pages/Login page/firebase/firebase.init"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth"

initializeFirebase()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState()

  //   email, password
  const auth = getAuth()
  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("")

        const user = result.user
      })
      .catch((error) => {
        const errorCode = error.code
        setAuthError(error.message)
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  //   onAuthChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setAuthError("")
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
  }, [])
  //   log Out
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // signin with email and password
  const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        setAuthError("")
      })
      .catch((error) => {
        const errorCode = error.code
        setAuthError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError
  }
}

export default useFirebase
