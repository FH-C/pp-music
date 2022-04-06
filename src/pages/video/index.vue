<template>
  <div class="content">
    <van-nav-bar
      left-arrow
      safe-area-inset-top
      class="left-nav-bar"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <video
      ref="refVideo"
      :src="url"
      class="video"
      autoplay
      muted
      @click="onClickVideo"
    ></video>
    <div
      v-if="mv.name || video.title"
      class="flex-column info"
    >
      <div class="flex-row align-items-center">
        <van-image
          :src="video.creator?.avatarUrl || mv.artists[0].img1v1Url"
          class="minier-icon"
          round
        />
        <span
          class="midium-font"
          style="padding: 0 2vw;"
        >{{ video.creator?.nickname || mv?.artists[0]?.name }}</span>
        <van-button
          color="#ff3a3a"
          size="mini"
          round
          style="width: 7vw;height: 3vh;"
          @click="follow(video.creator? video.creator : mv.artists[0])"
        >
          +
        </van-button>
      </div>
      <div
        class="flex-row"
        style="padding: 2vh 0;"
      >
        <span class="midium-font">{{ mv.name || video.title }}</span>
      </div>
      <div class="small-font">{{ mv.playCount? playCount(mv.playCount) : playCount(video.playTime) }}次播放</div>
    </div>
    <div>
      <ProgressVue
        :percentage="currentTime / duration * 100"
        color="rgba(108, 111, 111, 0.2)"
        track-color="rgba(108, 111, 111, 0.1)"
        class="progress-bar"
        stroke-width="0.4vh"
        @update:percentage="updatePercentage"
      ></ProgressVue>
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSongStore } from '@/store/song'
import { mlogToVideo, getVideoDetail, getVideoUrl, getMVDetail, getMVUrl, getRelatedVideo } from '@/api/video'
import { onClickLeft } from '@/utils/router'
import { playCount } from '@/utils/convert'
import { subscribeArtist } from '@/api/artist'
import ProgressVue from '@/components/Progress.vue'
const router = useRouter()
const route = useRoute()
const songStore = useSongStore()
const video = ref({}) as any
const url = ref('')
const videoId = ref(route.query.id)
const mv = ref({}) as any
const refVideo = ref(null) as any
const currentTime = ref(0)
const duration =  ref(0)
onMounted(async () => {
  songStore.playStatus = false
  if ((route.query.type as string) === 'mv') {
    await mvDetail()
    await mvUrl()
  } else if ((route.query.type as string) === 'mlog') {
    videoId.value = await getVideoId(route.query.id as string)
    await videoDetail()
    await videoUrl()
  } else if ((route.query.type as string) === 'video') {
    await videoDetail()
    await videoUrl()
  } else {
    console.log('error')
  }
  await relatedVideo()
  duration.value = refVideo.value.duration
  refVideo.value.addEventListener('timeupdate', () => {
    currentTime.value = refVideo.value.currentTime
  })
})
const mvDetail = async function () {
  const res = await getMVDetail({
    mvid: videoId.value,
  })
  mv.value = res.value.data
}
const mvUrl = async function () {
  const res = await getMVUrl({
    id: videoId.value,
  })
  url.value = res.value.data.url
}
const videoDetail = async function () {
  const res = await getVideoDetail({
    id: videoId.value,
  })
  video.value = res.value.data
}
const videoUrl = async function () {
  const res = await getVideoUrl({
    id: videoId.value,
  })
  url.value = res.value.urls[0].url
}
const relatedVideo = async function () {
  await getRelatedVideo({
    id: videoId.value,
  })
}
const getVideoId = async function (mlogId: string) {
  const res = await mlogToVideo({
    id: mlogId,
  })
  return res.value.data
}
const follow = async function (artist: any) {
  const t = artist.followed ? '0' : '1'
  await subscribeArtist({
    id: artist.id,
    t: t,
  })
  artist.followed = !artist.followed
}
const onClickVideo = function () {
  if (refVideo.value.paused) {
    refVideo.value.muted = false
    refVideo.value.play()
  } else {
    refVideo.value.pause()
  }
}

const updatePercentage = function (percentage: number) {
  refVideo.value.currentTime = percentage / 100 * duration.value
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.content {
  background-color: #000;
  height: 100vh;
  color: #fff;
  text-align: left;
}

.video {
  width: 100vw;
  position: relative;
  top: 20vh;
}
.left-nav-bar {
  position: absolute;
  top: 0;
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}

.info {
  position: absolute;
  left: 4vw;
  bottom: 8vh;
}

.progress-bar {
  position: absolute;
  bottom: 4vh;
  width: 100vw;
}
</style>
