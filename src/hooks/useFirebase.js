import { useEffect, useState } from "react"
import initializeFirebase from "../Components/Pages/Login page/firebase/firebase.init"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth"

initializeFirebase()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState()

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  //   email, password

  const registerUser = (email, password, history, name) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("")

        const newUser = { email, displayName: name }
        setUser(newUser)
        // sending name to firebase after creation
        // Update Profile //
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {})
          .catch((error) => {})

        history.replace("/")
      })
      .catch((error) => {
        setAuthError(error.message)
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  // sign in with google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("")
        const user = result.users
      })
      .catch((error) => {
        const errorCode = error.code
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
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
  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        const destination = location.state?.from || "/"
        history.replace(destination)
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
    authError,
    signInWithGoogle
  }
}

export default useFirebase
