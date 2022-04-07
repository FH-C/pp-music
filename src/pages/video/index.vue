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
      @click="playStatus = !playStatus"
    ></video>
    <van-icon
      v-if="!playStatus"
      name="play-circle-o"
      color="rgba(255, 255, 255, 0.8)"
      size="20vw"
      style="position: absolute;top: 36%;left: 50%;transform: translate(-50%, -50%);"
      @click="playStatus = !playStatus"
    />
    <div
      v-if="mv.name || video.title"
      class="flex-column info"
    >
      <div class="flex-row align-items-center">
        <van-image
          :src="video.creator?.avatarUrl || mv.artists[0].img1v1Url || mv.cover"
          class="minier-icon"
          round
        />
        <span
          class="midium-font"
          style="padding: 0 2vw;"
        >{{ video.creator?.nickname || mv?.artists[0]?.name }}</span>
        <van-button
          v-if="!(video.creator? video.creator.followed : mv.artists[0].followed)"
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
      <svg
        v-if="!muted"
        t="1649299789947"
        class="volumn-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2773"
        @click="muted = !muted"
      ><path
        d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM800.906667 829.653333a32.288 32.288 0 0 1-45.248-0.757333 31.317333 31.317333 0 0 1 0.768-44.693333c157.653333-150.464 157.653333-393.962667 0-544.426667a31.317333 31.317333 0 0 1-0.768-44.682667 32.288 32.288 0 0 1 45.248-0.757333c183.68 175.306667 183.68 460.010667 0 635.317333z m-106.901334-126.186666a32.288 32.288 0 0 1-45.248-1.216 31.328 31.328 0 0 1 1.237334-44.672c86.229333-80.608 86.229333-210.56 0-291.178667a31.328 31.328 0 0 1-1.237334-44.672 32.288 32.288 0 0 1 45.248-1.216c112.885333 105.546667 112.885333 277.418667 0 382.965333z"
        p-id="2774"
        fill="#cdcdcd"
      ></path></svg>
      <svg
        v-else
        t="1649299919303"
        class="volumn-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3067"
        @click="muted = !muted"
      ><path
        d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM832.565333 518.4l86.474667 86.474667a30.570667 30.570667 0 1 1-43.232 43.242666L789.333333 561.653333l-86.474666 86.474667a30.570667 30.570667 0 1 1-43.232-43.242667l86.474666-86.474666-86.474666-86.474667a30.570667 30.570667 0 1 1 43.232-43.232L789.333333 475.178667l86.474667-86.474667a30.570667 30.570667 0 1 1 43.232 43.232l-86.474667 86.474667z"
        p-id="3068"
        fill="#cdcdcd"
      ></path></svg>
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
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSongStore } from '@/store/song'
import { mlogToVideo, getVideoDetail, getVideoUrl, getMVDetail, getMVUrl, getRelatedVideo } from '@/api/video'
import { onClickLeft } from '@/utils/router'
import { playCount } from '@/utils/convert'
import { subscribeArtist } from '@/api/artist'
import ProgressVue from '@/components/Progress.vue'
import { Toast } from 'vant'
const router = useRouter()
const route = useRoute()
const songStore = useSongStore()
const video = ref({}) as any
const url = ref('')
const videoId = ref(route.query.id)
const mv = ref({}) as any
const refVideo = ref(null) as any
const currentTime = ref(0)
const duration =  ref(1)
const muted = ref(true)
const playStatus = ref(true)
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
  refVideo.value.oncanplay = function (e: any) {
    duration.value = e.target.duration
  }
  refVideo.value.addEventListener('timeupdate', (e: any) => {
    currentTime.value = e.target.currentTime
  })
  await relatedVideo()
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
  Toast('关注成功')
}

const updatePercentage = function (percentage: number) {
  refVideo.value.currentTime = percentage / 100 * duration.value
}
watch(muted, (newValue) => {
  if (newValue) {
    refVideo.value.muted = true
  } else {
    refVideo.value.muted = false
  }
})
watch(playStatus, (newValue) => {
  if (newValue) {
    refVideo.value.play()
  } else {
    refVideo.value.pause()
  }
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.content {
  background-color: #000;
  height: 100%;
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
  width: 80vw;
}

.volumn-icon {
  position: absolute;
  right: 12vw;
  bottom: 3vh;
  width: 4vw;
  height: 4vw;
}
</style>
