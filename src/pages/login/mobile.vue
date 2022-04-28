<template>
  <div>
    <van-nav-bar
      title="手机号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <div class="text1">
        登录体验更多精彩
      </div>
      <div class="text2">
        未注册手机号登录后将自动创建账号
      </div>
      <div class="flex-row phone-div">
        <van-field
          v-model="countryCode"
          readonly
          class="phone-button"
          :border="true"
          @click="showPicker=true"
        />
        <van-field
          v-model="phone"
          :border="true"
          maxlength="11"
          placeholder="请输入手机号"
          type="tel"
        />
        <van-popup
          :show="showPicker"
          round
          position="bottom"
        >
          <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>
      <div style="padding-top: 20px;">
        <Button
          class="login-button"
          round
          type="primary"
          color="#ff3a3a"
          style="height: 40px;"
          @click="nextStep"
        >
          下一步
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NavBar, Picker, Popup, Field, Button, Toast } from 'vant'
import { ref } from 'vue'
import { onClickLeft } from '@/utils/router'
const columns = ['+86']
const showPicker = ref(false)
const countryCode = ref('+86')
const phone = ref('')
const router = useRouter()

const onConfirm = (value: string) => {
  countryCode.value = value
  showPicker.value = false
}
const nextStep = function () {
  if (phone.value.length < 11) {
    return Toast('请输入11位数字的手机号')
  }
  Toast.loading({
    forbidClick: true
  })
  router.push({
    name: 'VerifyLogin',
    query: {
      countryCode: countryCode.value,
      phone: phone.value
    }
  })
}
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
  font-weight: 50;
}

.phone-button {
  width: 140px;
  height: 80px;
  font-size: 30px;
}

.phone-div {
  padding-top: 10px;
}
</style>
