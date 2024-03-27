import NewNoteForm from "./newNoteForm"

function UI({ setLoggedUser }) {
  function handleLogOut() {
    window.sessionStorage.removeItem('currentUser')
    setLoggedUser(null)
  }

  return (
    <div>
      <button type="button" onClick={handleLogOut}>log out</button>
      <NewNoteForm/>
    </div>
  )
}

export default UI