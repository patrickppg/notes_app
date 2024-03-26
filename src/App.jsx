import { useState, useEffect } from "react"
import LoginForm from "./components/loginForm"

const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))

function App() {
  const [loggedUser, setLoggedUser] = useState(currentUser)

  return (
    !loggedUser
      ? <LoginForm setLoggedUser={setLoggedUser} />
      : 'user logged'
  )
}

export default App