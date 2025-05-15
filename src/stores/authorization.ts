import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthorizationStore = defineStore('authorization', () => {
  const token = ref<string | null>(null)

  function getToken() {
    if (token.value === null) {
      const localToken = localStorage.getItem('token')
      if (localToken === null) return null
      token.value = localToken
    }
    return token.value
  }

  function setToken(newToken: string | null) {
    if (newToken === null) deleteToken()
    token.value = newToken
    localStorage.setItem('token', newToken ?? '')
  }

  function deleteToken() {
    localStorage.removeItem('token')
    token.value = null
  }

  function hasToken() {
    const currentToken = getToken()
    return currentToken !== null && currentToken !== ''
  }

  return { token, setToken, getToken, deleteToken, hasToken }
})
