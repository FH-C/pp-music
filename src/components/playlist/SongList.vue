<template>
  <div>
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
      v-for="(item, index) in props.songList"
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
          {{ item.name }}
        </span>
      </template>
      <template #label>
        <div class="small-font">
          <!-- <van-tag
            v-if="item.privilege.maxbr === 999000"
            plain
            type="primary"
            color="#ff3024"
          >
            SQ
          </van-tag> -->
          <span v-if="item.ar.length > 0">
            <span
              v-for="(ar, index2) in item.ar"
              :key="ar.id"
            >
              {{ ar.name }}
              <span v-if="index2 + 1 !== item.ar.length">/</span>
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSearchStore } from '../../store/search'
import { useSongStore } from '../../store/song'

const props = defineProps({
  songList: {
    type: Array as any,
    default: () => {
      return []
    },
  },
  privileges: {
    type: Array as any,
    default: () => {
      return []
    },
  },
})
const songStore = useSongStore()

const play = function (index: number) {
  songStore.playingSongList = props.songList
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
