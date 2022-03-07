<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
    >
      <template #left>
        <van-icon
          name="wap-nav"
          size="18"
          color="#000000"
        />
      </template>
      <template #title>
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Search } from 'vant'
import { ref, watch } from 'vue'
const value = ref('')
</script>

<style scoped>
.van-search {
  padding: 0px;
}
</style>