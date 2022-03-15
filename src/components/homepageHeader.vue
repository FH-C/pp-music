<template>
  <div>
    <van-nav-bar
      fixed
      safe-area-inset-top
    >
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
          shape="round"
          :placeholder="showKeyword"
          @click="toSearch"
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
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { searchDefault } from '../api/search'
const router = useRouter()
const showKeyword = ref('')
const toSearch = function () {
  router.push('search')
}
const getDefaultKey = async function() {
  const res = await searchDefault()
  showKeyword.value = res.value.data.showKeyword
}
onMounted(() => {
  getDefaultKey()
})
</script>

<style scoped>
.van-search {
  padding: 0px;
}
</style>