export const setToken = token => {
  window.localStorage.setItem('vandnpersonaltoken', token)
}

export const getToken = () => {
  return window.localStorage.getItem('vandnpersonaltoken')
}

export const logout = () => {
  localStorage.removeItem('vandnpersonaltoken')
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3)  return false 
  return JSON.parse(window.atob(parts[1]))
}

export const getUserId = () => {
  return getPayload().sub
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}