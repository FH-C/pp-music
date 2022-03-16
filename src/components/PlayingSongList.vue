<template>
  <div>
    <van-popup
      :show="songStore.showPopup"
      round
      position="bottom"
      :style="{ height: '30%' }"
      close-on-click-overlay
      close-on-popstate
    >
      <van-cell
        v-for="song in songStore.playingSongList"
        :key="song.id"
        style="text-align: left;"
      >
        <template #title>
          <span
            class="medium-font"
            style="font-weight: 650;"
          >
            {{ song.name }}
          </span>
          <span
            v-if="song.alia.length > 0"
            class="medium-font"
          >({{ song.alia[0] }})</span>
          <span
            v-if="song.ar.length > 0"
            class="small-font"
          >
            -<span
              v-for="(ar, index) in song.ar"
              :key="ar.id"
            >{{ ar.name }}<span v-if="index + 1 !== song.ar.length">/</span></span>
          </span>
        </template>
        <template #right-icon>
          <van-icon name="cross" />
        </template>
      </van-cell>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { Popup, Cell } from 'vant'
import { useSongStore } from '../store/song'
const songStore = useSongStore()
</script>

<style scoped lang="scss">
@import url('../styles/common.scss');
</style>
