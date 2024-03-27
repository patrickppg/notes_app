import { useState } from "react"
import noteServices from '../services/notes'

function NewNoteForm() {
  const [newNote, setNewNote] = useState('')

  async function handleSubmission(e) {
    e.preventDefault()

    const savedNote = await noteServices.create(newNote)
  }

  return (
    <form onSubmit={handleSubmission} autoComplete="off">
      <input
        type="text"
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
        placeholder="Add note"
      />
      <button>add note</button>
    </form>
  )
}

export default NewNoteForm