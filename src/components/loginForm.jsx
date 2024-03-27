import { useState } from "react"
import loginServices from "../services/login"

function LoginForm({ setLoggedUser }) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmission(e) {
    e.preventDefault()

    const loggedUser = await loginServices.login(user)
    if (!loggedUser) return
    window.sessionStorage.setItem("currentUser", JSON.stringify(loggedUser))
    setLoggedUser(loggedUser)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmission}>
      <div>
        <label htmlFor="usernameField">username</label>
        <input
          id="usernameField"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="passwordField">password</label>
        <input
          id="passwordField"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button>log in</button>
    </form>
  )
}

export default LoginForm