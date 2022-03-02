<template>
  <div>
    <div>
      <img
        alt="Vue logo"
        src="../../assets/logo.png"
        height="82"
        width="82"
      />
    </div>
    <div class="box1">
      <div>
        <Button
          round
          type="primary"
          plain
          hairline
          color="#db2c1f"
          style="font-"
        >
          手机号登录
        </Button>
      </div>
      <div>
        <Button
          round
          type="primary"
          color="#db2c1f"
        >
          立即体验
        </Button>
      </div>
      <div>
        <van-checkbox
          v-model="checked"
          class="agree"
          icon-size="12px"
          checked-color="#db2c1f"
          shape="square"
        >
          <span>
            同意
          </span>
          <span>
            《用户协议》
          </span>
          <span>
            《隐私政策》
          </span>
          <span>
            《儿童隐私协议》
          </span>
        </van-checkbox>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'vant'
import { Checkbox } from 'vant'
import { ref } from 'vue'

const checked = ref(false)
</script>

<style scoped lang="scss">
</style>
