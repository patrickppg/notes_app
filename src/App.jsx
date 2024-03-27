import { useState } from "react"
import LoginForm from "./components/loginForm"
import UI from "./components/ui"

const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))

function App() {
  const [loggedUser, setLoggedUser] = useState(currentUser)

  return (
    !loggedUser
      ? <LoginForm setLoggedUser={setLoggedUser} />
      : <UI setLoggedUser={setLoggedUser} />
  )
}

export default App