<template>
  <div>
    <van-nav-bar>
      <template #left>
        <van-icon
          name="wap-nav"
          size="18"
          color="#000000"
          badge="99+"
        />
      </template>
      <template #title>
        <van-search
          v-model="value"
          shape="round"
          placeholder="邓紫棋 最近很火哦~"
        >
          <template #left-icon>
            <van-icon
              name="search"
              color="#000000"
            />
          </template>
        </van-search>
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