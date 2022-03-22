<template>
  <div
    class="flex-row padding-row-4 scroll-x"
    style="background-color: white;"
  >
    <div
      v-for="item in props.homepageIconList"
      :key="item.id"
      class="flex-column icon"
      style="margin-top: 2vh;margin-bottom: 2vh;"
    >
      <span
        class="red-icon-box"
      >
        <van-image
          :round="true"
          :src="item.iconUrl"
          class="mini-icon"
          style="background-color: #fff1f1;"
        />
      </span>
      <span class="small-font">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { homepageIcon } from '@/api/home'
import { homepageiConType } from '@/types/types'
import { Image } from 'vant'
const props = defineProps({
  homepageIconList: {
    type: Array as PropType<homepageiConType[]>,
    default: () => {
      return []
    },
  },
})
</script>

<style scoped>
@import url('@/style/common.scss');
.icon {
  margin-left: 4%;
  margin-right: 2%;
}
</style>