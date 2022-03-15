<template>
  <div>
    <van-list
      v-model:loading="searchStore.loading"
      :finished="searchStore.finished"
      finished-text="到底啦~"
      @load="onLoad"
    >
      <van-cell
        v-for="item in searchStore.searchResult.songs"
        :key="item.id"
        style="text-align: left;"
        center
      >
        <template #title>
          {{ item.name }}
        </template>
        <template #label>
          <div class="small-font">
            <van-tag
              v-if="item.privilege.maxbr === 999000"
              plain
              type="primary"
              color="#ff8989"
            >
              SQ
            </van-tag>
            <span v-if="item.ar.length > 0">
              <span
                v-for="(ar, index) in item.ar"
                :key="ar.id"
              >{{ ar.name }}<span v-if="index + 1 !== item.ar.length">/</span>
              </span>
            </span>
            <span>
              -{{ item.al.name }}
            </span>
          </div>
        </template>
        <template #right-icon>
          <!-- <van-icon
            name="play-circle-o"
            class="play-icon"
          /> -->
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '../../store/search'
const emit = defineEmits(['load'])
const searchStore = useSearchStore()

const onLoad = function () {
  searchStore.currentOffset ++
  emit('load')
}
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');

</style>
