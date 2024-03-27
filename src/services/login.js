import axios from "axios"

const baseUrl = '/api/login'

async function login(user) {
  const res = await axios.post(baseUrl, user, {
    validateStatus: () => true
  })
  
  if (res.status === 401) return null
  else return res.data
}

export default {
  login,
}