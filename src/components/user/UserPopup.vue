<template>
  <div class="content">
    <van-popup
      :show="userStore.showUserPopup"
      position="left"
      :style="{ width: '80%', height: '100%' }"
      close-on-popstate
      class="margin-row-4"
      @click-overlay="userStore.showUserPopup = false"
    >
      <van-cell
        style="background-color: #f5f5f5;"
        @click="userProfile"
      >
        <template #title>
          <div
            v-if="userStore.profile"
            class="flex-row align-items-end"
          >
            <van-image
              round
              src="/src/assets/images/user-avatar.jpg"
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
              src="/src/assets/images/user-avatar.jpg"
              class="mini-image"
            />
            <span class="big-font margin-row-4">
              立即登录
              <van-icon name="arrow" />
            </span>
          </div>
        </template>
      </van-cell>
      <van-cell-group
        inset
        class="card"
      >
        <van-cell
          title="我的消息"
        />
        <van-cell
          title="云贝中心"
        />
        <van-cell
          title="创作者中心"
        />
      </van-cell-group>
      <van-cell-group
        inset
        class="card"
      >
        <van-cell
          title="我的云盘"
          to="/cloud"
        />
      </van-cell-group>
      <van-cell-group
        inset
        class="logout"
      >
        <van-cell
          title="退出登录"
          style="color: #fe4545;"
          @click="onLogout"
        />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { logout } from '@/api/login'
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
const onLogout = async function () {
  await logout()
  userStore.showUserPopup = false
  router.push({ path: '/login' })
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.content {
  :deep(.van-popup) {
    background-color: #f5f5f5;
  }
}

.card {
  margin: 2vh;
  text-align: left;
}

.logout {
  text-align: center;
}
</style>
