import axios from 'axios'
import qs from 'qs'
import {useAuthorizationStore} from "@/stores/authorization";
import {useMessageStore} from "@/stores/message";
import type {ApiError, ApiResponse} from "@/types";

export const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  paramsSerializer: (params: Record<string, any>) => qs.stringify(params, {
    arrayFormat: 'comma'
  })
})

request.interceptors.request.use((config) => {
  if (config.url !== undefined) {
    if (! config.url.startsWith('/auth/')) {
      config.headers.Authorization = `Bearer ${useAuthorizationStore().getToken()}`
    }
  }
  return config
})

request.interceptors.response.use(
  (response: ApiResponse) => {
    return response
  },
  (error: ApiError) => {
    useMessageStore().error(error.response!.data!.msg ?? error.message)
    return Promise.reject(error)
  },
)
