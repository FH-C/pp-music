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
      <input
        v-for="item in 6"
        :key="item"
        v-model="verifyCode[item]"
        class="underscore"
        :disabled="loading" 
        @input="e => {onInput(e.target.value, index)}"
        @keydown.delete="e=>{onKeydown(e.target.value, index)}"
        @focus="onFocus"
      />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CountDown, Field } from 'vant'
import { onClickLeft } from '../../utils/router'
const route = useRoute()
const router = useRouter()
const time = ref(0)
const verifyCode = reactive([undefined, undefined, undefined, undefined, undefined, undefined])
let countdown: NodeJS.Timeout | null = null
const onClickRight = function () {
  console.log(route.query)
}
const resend = function () {
  time.value = 60
  countdown = setInterval(() => {
    time.value --
  }, 1000)
}
const next = function () {
  if (countdown) {
    clearInterval(countdown)
  }
}
onUnmounted (() => {
  console.log('onUnmounted')
  if (countdown) {
    clearInterval(countdown)
  }
})
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');

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
    padding-right: 20px;
    margin-top: 80px;
}

input {
  margin-right: 20px;
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
