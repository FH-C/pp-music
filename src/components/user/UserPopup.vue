<template>
  <div>
    <van-popup
      :show="userStore.showUserPopup"
      position="left"
      :style="{ width: '80%', height: '100%' }"
      close-on-popstate
      class="margin-row-4"
      @click-overlay="userStore.showUserPopup = false"
    >
      <van-cell @click="userProfile">
        <template #title>
          <div
            v-if="userStore.profile"
            class="flex-row align-items-end"
          >
            <van-image
              round
              src="@/assets/image/user-avatar.jpg"
              class="mini-image"
            />
            <span class="big-font margin-row-4">
              {{ userStore.profile.nickname }}
              <van-icon name="arrow" />
            </span>
          </div>
          <div
            v-else
            class="flex-row align-items-end"
          >
            <van-image
              round
              src="@/assets/images/user-avatar.jpg"
              class="mini-image"
            />
            <span class="big-font margin-row-4">
              立即登录
              <van-icon name="arrow" />
            </span>
          </div>
        </template>
      </van-cell>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

const userProfile = function () {
  userStore.showUserPopup = false
  if (userStore.profile) {
    router.push({ path: '/user/profile' })
  } else {
    router.push({ path: '/login' })
  }
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
</style>