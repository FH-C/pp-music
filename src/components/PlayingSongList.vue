<template>
  <div>
    <van-popup
      :show="songStore.showPopup"
      round
      position="bottom"
      :style="{ height: '50%' }"
      close-on-popstate
      @click-overlay="songStore.showPopup = false"
    >
      <van-cell
        center
        style="text-align: left;"
      >
        <template #title>
          <span class="bold">
            当前播放
          </span>
          <span class="small-font">
            ({{ songStore.playingSongList.length }})
          </span>
        </template>
      </van-cell>
      <van-cell
        center
        style="text-align: left;"
      >
        <template #title>
          <PlayingTypeVue>
            <template #default>
              {{ circleText[songStore.playingType] }}
            </template>
          </PlayingTypeVue>
        </template>
        <template #value>
          <span>
            <van-icon
              name="delete"
              @click="removeAllSong"
            />
          </span>
        </template>
      </van-cell>
      <van-cell
        v-for="(song, index) in songStore.playingSongList"
        :key="song.id"
        style="text-align: left;"
        center
        @click="play(index)"
      >
        <template #title>
          <span :class="{'red': song.id == songStore.playingId}">
            <span
              v-if="song.id == songStore.playingId"
            >
              <svg
                t="1647479652165"
                class="micro-icon"
                viewBox="0 0 1186 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="29949"
              ><path
                d="M915.352785 904.488064h-108.647215v-325.941645h108.647215v325.941645zM589.411141 904.488064h-108.647215v-543.236075h108.647215v543.236075zM263.469496 904.488064h-108.647215v-760.530504h108.647215v760.530504z"
                p-id="29950"
                data-spm-anchor-id="a313x.7781069.0.i6"
                class="selected"
                fill="#ff4040"
              ></path></svg>
            </span>
            <span
              class="medium-font"
              style="font-weight: 650;"
            >
              {{ song.name }}
            </span>
            <span
              v-if="song.alia && song.alia.length > 0"
              class="medium-font"
            >({{ song.alia[0] }})</span>
            <!-- <span
              v-else-if="song.alias && song.alias.length > 0"
              class="medium-font"
            >({{ song.alias[0] }})</span> -->
            <span
              v-if="song.ar && song.ar.length > 0"
              class="small-font"
            >
              -<span
                v-for="(ar, index2) in song.ar"
                :key="ar.id"
              >{{ ar.name }}<span v-if="index2 + 1 !== song.ar.length">/</span></span>
            </span>
            <span
              v-else-if="song.artists && song.artists.length > 0"
              class="small-font"
            >
              -<span
                v-for="(ar, index2) in song.artists"
                :key="ar.id"
              >{{ ar.name }}<span v-if="index2 + 1 !== song.artists.length">/</span></span>
            </span>
          </span>
        </template>
        <template #right-icon>
          <van-icon
            name="cross"
            @click="removeSong(index)"
          />
        </template>
      </van-cell>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { Popup, Cell } from 'vant'
import { useSongStore } from 'store/song'
import PlayingTypeVue from 'components/PlayingType.vue'
const emit = defineEmits(['play'])
const songStore = useSongStore()
const circleText = ['列表循环', '随机播放', '单曲循环']

const removeSong = function (index: number) {
  songStore.playingSongList.splice(index, 1)
  if (index === songStore.playingIndex) {
    songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
    setTimeout(() => {
      songStore.playStatus = false
    }, 200)
    setTimeout(() => {
      songStore.playStatus = true
    }, 200)
  } else if (index <= songStore.playingIndex) {
    songStore.playingIndex--
  }
}
const removeAllSong = function () {
  songStore.playingIndex = 0
  songStore.playingSongList = []
  songStore.playStatus = false
}
const play = function (index: number) {
  emit('play', index)
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.red {
  color: #ff4040;
}
</style>
