import { onMounted, ref } from 'vue'
import {defineStore, type PiniaPluginContext} from 'pinia'
import type { ApiResponse, User } from '@/types'
import { getCurrentUserInfo } from '@/api/account'
import { useAuthorizationStore } from '@/stores/authorization'

export const useUserInfoStore = defineStore('user-info', () => {

  const userInfo = ref<User>()

  const refreshUserInfo = () => {
    if (! useAuthorizationStore().hasToken()) return;

    getCurrentUserInfo()
      .then((res: ApiResponse<User>) => {
        userInfo.value = res.data.data;
      })
      .catch(() => {})
  }

  const updateUserInfo = (data: User) => {
    userInfo.value = data;
  }

  return { userInfo, refreshUserInfo, updateUserInfo }
}, {
  persist: {
    storage: localStorage,
    key: 'userInfo',
    afterRestore: (ctx: PiniaPluginContext) => {
      if (ctx.store.userInfo === undefined) {
        ctx.store.refreshUserInfo()
      }
    }
  }
})
