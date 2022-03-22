import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      showUserPopup: false,
      profile: {} as any,
      account: {} as any,
    }
  },
  actions: {
    
  },
})
