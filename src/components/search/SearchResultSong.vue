<template>
  <div>
    <van-list
      v-model:loading="searchStore.loading"
      :finished="searchStore.finished"
      finished-text="到底啦~"
      @load="onLoad"
    >
      <van-cell
        style="text-align: left;"
        center
        @click="play(-1)"
      >
        <template #icon>
          <van-icon
            name="play-circle"
            color="#ff3024"
            class="small-play-icon"
            style="padding-right: 2vw;"
          />
        </template>
        <template #title>
          <span class="bold">播放全部</span>
        </template>
      </van-cell>
      <van-cell
        v-for="(item, index) in searchStore.searchResultSong.songs"
        :key="item.id"
        style="text-align: left;"
        center
        @click="play(index)"
      >
        <template #title>
          <span
            class="medium-font text-line-one"
            style="font-weight: 500;"
          >
            <span v-if="getIndex(item.name) !== -1">{{ item.name.slice(0, getIndex(item.name)) }}</span>
            <span v-else>{{ item.name.slice(0) }}</span>
            <span
              v-if="getIndex(item.name) !== -1"
              class="font-blue"
            >
              {{ item.name.slice(getIndex(item.name), getIndex(item.name) + searchStore.searchKeyword.length) }}
            </span>
            <span v-if="getIndex(item.name) !== -1">
              {{ item.name.slice(getIndex(item.name) + searchStore.searchKeyword.length) }}
            </span>
          </span>
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
                v-for="(ar, index2) in item.ar"
                :key="ar.id"
              >
                <span :class="{ 'font-blue': ar.name === searchStore.searchKeyword }">{{ ar.name }}</span>
                <span v-if="index2 + 1 !== item.ar.length">/</span>
              </span>
            </span>
            <span>
              -<span v-if="getIndex(item.al.name) !== -1">{{ item.al.name.slice(0, getIndex(item.al.name)) }}</span>
              <span v-else>{{ item.al.name.slice(0) }}</span>
              <span
                v-if="getIndex(item.al.name) !== -1"
                class="font-blue"
              >
                {{ item.al.name.slice(
                  getIndex(item.al.name), getIndex(item.al.name) + searchStore.searchKeyword.length) }}
              </span>
              <span v-if="getIndex(item.al.name) !== -1">
                {{ item.al.name.slice(getIndex(item.al.name) + searchStore.searchKeyword.length) }}
              </span>
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
import { computed, ref } from 'vue'
import { useSearchStore } from '../../store/search'
import { useSongStore } from '../../store/song'
const emit = defineEmits(['load'])
const searchStore = useSearchStore()
const songStore = useSongStore()

const onLoad = function () {
  searchStore.currentOffsetList[searchStore.active] ++
  emit('load')
}
const getIndex = computed(() => {
  return function(name: string) {
    return name.indexOf(searchStore.searchKeyword)
  }
})
const play = function (index: number) {
  songStore.playingSongList = searchStore.searchResultSong.songs
  songStore.playingIndex = 0
  if (index !== -1) {
    songStore.playingIndex = index
  }
  songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
  songStore.showPlayer = true
  setTimeout(() => {
    songStore.playStatus = false
  }, 200)
  setTimeout(() => {
    songStore.playStatus = true
  }, 200)
}
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
</style>
