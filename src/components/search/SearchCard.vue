<template>
  <div class="flex-row flex-wrap margin-row-4 shadow">
    <div
      v-for="(keyword, index) in (keywordList as any).slice(0, showLength)"
      :key="keyword.searchWord"
      class="contain"
      @click="search(keyword.searchWord)"
    >
      <div style="text-align: left;">
        <span :class="getRankClass(index)">{{ index + 1 }}</span>
        <span :class="getFontClass(index)">{{ keyword.searchWord }}</span>
        <span v-if="keyword.iconUrl">
          <van-image
            class="icon"
            :src="keyword.iconUrl"
          />
        </span>
      </div>
    </div>
    <div
      v-if="showLength === 10"
      class="small-font show-more"
      @click="showLength = 20"
    >
      展开更多热搜<van-icon name="arrow-down" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Image as VanImage } from 'vant'
import { cloudsearch } from '@/api/search'

const emit = defineEmits(['search'])
const props = defineProps({
  keywordList: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const showLength = ref(10)
const getRankClass = computed(() => {
  return function(index: number) {
    if (index < 3) {
      return ['rank', 'red']
    }
    return ['rank', 'gray']
  }
})

const getFontClass = computed(() => {
  return function(index: number) {
    if (index < 3) {
      return 'font-bold'
    }
    return ''
  }
})
const search = async function (keyword: string) {
  emit('search', keyword)
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.contain {
    width: 40vw;
    padding-left: 4vw;
    padding-bottom: 1vh;
}

.shadow {
  -moz-box-shadow: 5px 5px 5px #f9f9f9; /* 老的 Firefox */
  box-shadow: -5px 0 3px 5px #f9f9f9, //左边阴影
              0 -5px 100px 10px #f9f9f9, //顶部阴影
              0 5px 10px 10px #f9f9f9, //底部阴影
              5px 0 1px -1px #f9f9f9; //右边阴影
}
.rank {
  display: inline-block;
  width: 60px;
}

.red {
  color: #ff4646;
}

.gray {
  color: #9e9e9e;
}

.font-bold {
  font-weight: 600;
}

.show-more {
  text-align: center;
  flex-grow:1;
  padding-bottom: 1vh;
  padding-top: 1.5vh;
}

.icon {
  padding-left: 10px;
  width: 25px;
  height: 25px;
}
</style>