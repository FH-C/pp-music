<template>
  <div>
    <van-nav-bar
      title="手机号登录"
      left-arrow
      right-text="密码登录"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
  <div>
    <div class="text1">请输入验证码</div>
    <div class="flex-row space-between">
      <span class="text2">
        已发送至{{ route.query.countryCode }} {{ route.query.phone }}
      </span>
      <span
        v-if="time === 0"
        class="text3"
        @click="resend"
      >
        重新获取
      </span>
      <span
        v-else
        class="text2"
      >
        {{ time }}s
      </span>
    </div>
    <div class="flex-row justify-content-center verify-code">
      <van-field
        v-for="(item, index) in 4"
        :key="index"
        :ref="(el: any) => { refs[index] = el }"
        v-model="verifyCode[index]"
        type="number"
        maxlength="1"
        input-align="center"
        @input="e => {onInput(e, index)}"
        @keydown.delete.prevent="e => {onDelete(e, index)}"
        @click="onClick"
      />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, reactive, Ref, onMounted, watch, onBeforeUpdate } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Field, Toast, Dialog } from 'vant'
import { onClickLeft } from '@/utils/router'
import { sendCaptcha, verifyCaptcha, phoneLogin } from '@/api/login'
const route = useRoute()
const router = useRouter()
const time = ref(60)
const verifyCode = reactive([''])
const refs: any = ref([])
let countdown: NodeJS.Timeout | null = null
const onClickRight = function () {
  router.push({
    name: 'PasswordLogin',
    query: {
      countryCode: route.query.countryCode,
      phone: route.query.phone,
    },
  })
}
const resend = async function () {
  const result = await sendCaptcha({
    phone: route.query.phone,
    ctcode: route.query.countryCode?.slice(1),
  }, true)
  time.value = 60
  countdown = setInterval(() => {
    time.value --
  }, 1000)
}
const next = async function () {
  const res = await verifyCaptcha({
    phone: route.query.phone,
    ctcode: route.query.countryCode?.slice(1),
    captcha: verifyCode.join(''),
  }, true)
  if (res.data) {
    const res = await phoneLogin({
      phone: route.query.phone,
      captcha: verifyCode.join(''),
      countrycode: route.query.countryCode?.slice(1),
    }, true)
    Toast('登录成功')
    // const res2 = await loginStatus()
    router.push('home')
  } else {
    Toast('验证码错误')
    reset()
  }
}
const reset = function () {
  for (const index in verifyCode) {
    verifyCode[index] = ''
  }
}
const onInput = function (event: any, index: number) {
  if (index == 3) {
    return next()
  }
  refs.value[index + 1].focus()
}
const onDelete = function (event: any, index: number) {
  if (event.target.value) {
    verifyCode[index] = ''
  } else {
    refs.value[index - 1].focus()
    verifyCode[index - 1] = ''
  }
  if (index !== 0) {
    refs.value[index - 1].focus()
  }
}
const onClick = function () {
  refs.value[0].focus()
}
const openDialog = function () {
  Dialog.confirm({
    message: '验证成功后，可进行下一步操作哦~',
    confirmButtonText: '去验证',
    confirmButtonColor: '#ff4d4d',
    cancelButtonColor: '#ff4d4d',
  })
  .then(() => {
    router.push('')
  })
}
const clearCountdown = function () {
  if (countdown) {
    clearInterval(countdown)
  }
}
watch (time, (newValue, oldValue) => {
  if (newValue === 0) {
    clearCountdown()
  }
})
onMounted (() => {
  Toast('验证码已发送，请查收')
  resend()
  return
})
onUnmounted (() => {
  clearCountdown()
})
onBeforeUpdate(() => {
  refs.value = []
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.text1 {
  font-size: 40px;
  font-weight: 550;
  text-align: left;
  padding-left: 40px;
  padding-top: 40px;
}

.text2 {
  font-size: 27px;
  text-align: left;
  padding-left: 40px;
  padding-top: 20px;
  padding-right: 40px;
  font-weight: 50;
}

.text3 {
  font-size: 30px;
  text-align: left;
  padding-left: 40px;
  padding-top: 20px;
  padding-right: 40px;
  color: #6089b6;
}

.verify-code {
    margin-top: 80px;
}

input {
  width: 60px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #eee;
  font-size: 24px;
  outline: none;
}

input:last-of-type {
  margin-right: 0;
}

input:disabled {
  color: #000;
  background-color: #fff;
}

</style>
