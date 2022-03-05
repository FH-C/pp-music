<template>
  <div>
    <van-nav-bar
      title="手机号登录"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div>
    <div class="margin-top-40">
      <van-field
        v-model="password"
        center
        clearable
        placeholder="请输入密码"
        type="password"
        class="password-input"
        size="large"
      >
        <template #button>
          <span class="text1">
            忘记密码?
          </span>
        </template>
      </van-field>
    </div>
    <div class="margin-top-40">
      <Button
        class="login-button"
        round
        type="primary"
        :color="buttonColor"
        style="height: 40px;"
        @click="login"
      >
        登录
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NavBar, Picker, Popup, Field, Button, Toast } from 'vant'
import { computed, ref } from 'vue'
import { onClickLeft } from '../../utils/router'
const router = useRouter()
const password = ref('')
const login = function () {
  if (1 !== 1) {
    return Toast('账号或密码错误')
  }
  router.push('')
}
const buttonColor = computed(() => {
  return password.value ? '#ff3a3a' : '#ff7f7f'
})
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
.text1 {
    font-size: 16px;
    color: #6189b7;
}

.password-input {
    padding-left: 40px;
}

.margin-top-40 {
    margin-top: 40px;
}
</style>