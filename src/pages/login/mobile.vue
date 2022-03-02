<template>
  <div>
    <van-nav-bar
      title="手机号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="box1">
      <div>
        未注册手机号登录后将自动创建账号
      </div>
      <div class="box2">
        <Button
          @click="showPicker = true"
        >
          {{ value }}
        </Button>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button } from 'vant'
import { ref } from 'vue'
const columns = ['+86', '+87', '+88', '+89', '89', '89', '89']
const result = ref('')
const showPicker = ref(false)
const value = ref('+86')

const onConfirm = (value: string) => {
  result.value = value
  showPicker.value = false
}
const onClickLeft = () => history.back()
</script>

<style scoped>

</style>