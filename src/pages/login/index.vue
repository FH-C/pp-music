<template>
  <div class="login-background">
    <div class="logo">
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
          class="login-button"
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
          class="login-button"
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
          <span class="agree-font">
            同意
          </span>
          <span class="white-font">
            《用户协议》
          </span>
          <span class="white-font">
            《隐私政策》
          </span>
          <span class="white-font">
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

<style scoped>
.login-background {
  height: 100%;
  background-color: #db2c1f;
}

.box1 {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
}

.login-button {
  width: 80%;
  font-size: 20px;
  height: 45px;
  margin-bottom: 10px;
}

.agree {
  font-size: 12px;
  margin-bottom: 5%;
}
.van-checkbox {
  justify-content: center;
  align-items: flex-start;
}

.logo {
  height: 80%;
}
.logo img {
  margin-top: 40%;
}

.agree-font {
  font-weight: 100;
  color: white;
}
.white-font {
  color: white;
}
</style>
