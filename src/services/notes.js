import axios from 'axios'

const baseUrl = '/api/notes'

function getToken() {
  const token = JSON.parse(window.sessionStorage.getItem('currentUser')).token
  return `Bearer ${token}`
}

async function create(noteContent) {
  const newNote = {
    content: noteContent
  }

  const res = await axios.post(baseUrl, newNote, {
    headers: {
      Authorization: getToken()
    },
    validateStatus: () => true
  })

  console.log(res.data)

  if (res.status === 201) return res.data
  else return null
}

export default {
  create
}