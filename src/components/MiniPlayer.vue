<template>
  <div
    v-show="songStore.showPlayer"
  >
    <div style="display: none;">
      <audio
        ref="refAudio"
        :src="musicUrl"
        autoplay
        muted
      >
      </audio>
    </div>
    <div
      v-if="songStore.playingSongDetail.al"
      class="flex-row bar align-items-center"
    >
      <div class="image">
        <van-image
          :src="songStore.playingSongDetail.al.picUrl"
          round
          class="mini-icon"
          style="margin-left: 4vw;"
        />
      </div>
      <div
        class="text-line-one"
        style="padding-left: 2vw;width: 60vw;"
      >
        <span
          class="medium-font"
          style="font-weight: 650;"
        >
          {{ songStore.playingSongDetail.name }}
        </span>
        <span
          v-if="songStore.playingSongDetail.alia.length > 0"
          class="medium-font"
        >({{ songStore.playingSongDetail.alia[0] }})</span>
        <span
          v-if="songStore.playingSongDetail.ar.length > 0"
          class="small-font"
        >
          -<span
            v-for="(ar, index) in songStore.playingSongDetail.ar"
            :key="ar.id"
          >{{ ar.name }}<span v-if="index + 1 !== songStore.playingSongDetail.ar.length">/</span></span>
        </span>
      </div>
      <div class="icon flex-row">
        <div
          @click="play(false)"
        >
          <van-icon
            v-if="songStore.playStatus"
            name="pause-circle-o"
            class="play-icon"
          />
          <van-icon
            v-else
            name="play-circle-o"
            class="play-icon"
          />
        </div>
        <div>
          <van-icon
            name="bars"
            class="play-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'
import { onMounted, ref, watch } from 'vue'
import { getSongDetail } from '../api/play'
import { useSongStore } from '../store/song'

const musicUrl = ref('')
const refAudio = ref(undefined)
const songStore = useSongStore()

watch(() => songStore.playingId, async (songId) => {
  const res = await getSongDetail({
    ids: songId,
  })
  songStore.playingSongDetail = res.data.songs[0]
  console.log('songDetail:', res.data.songs[0])
  musicUrl.value = `https://music.163.com/song/media/outer/url?id=${ songId }.mp3`
  play(true)
})

const play = function (force: boolean) {
  if (force) {
    refAudio.value.play()
    songStore.playStatus = true
  } else {
    if (songStore.playStatus) {
      refAudio.value.pause()
    } else {
      refAudio.value.play()
    }
    songStore.playStatus = !songStore.playStatus
  }
  refAudio.value.muted = false
}

</script>

<style scoped lang="scss">
@import url('../styles/common.scss');
.bar {
  background-color: #ffffff;
  width: 100vw;
}
.bar:hover {
  background-color: #f2f2f2;
}

.icon {
  position: fixed;
  right: 4vw;
  div:last-child {
    padding-left: 4vw;
  }
}

.image {
  position: relative;
  bottom: 6px;
}

</style>
