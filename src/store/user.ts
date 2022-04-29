import { LoginStatusType } from '@/types/login'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      showUserPopup: false,
      profile: {} as LoginStatusType.Profile,
      account: {} as LoginStatusType.Account
    }
  },
  actions: {

  }
})
