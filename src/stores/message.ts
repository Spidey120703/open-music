import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messages', () => {

  const messages = ref<Record<string, any>[]>([])

  const log = (msg: string, color?: string, timeout: number = 2000) => {
    messages.value.push({
      text: msg,
      color,
      timeout,
    })
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }

  const success = (msg: string, timeout: number = 2000) => {
    return log(msg, 'success', timeout)
  }

  const warning = (msg: string, timeout: number = 2000) => {
    return log(msg, 'warning', timeout)
  }

  const info = (msg: string, timeout: number = 2000) => {
    return log(msg, 'info', timeout)
  }

  const error = (msg: string, timeout: number = 2000) => {
    return log(msg, 'error', timeout)
  }


  return {
    messages,
    log,
    success,
    warning,
    info,
    error,
  }
})
