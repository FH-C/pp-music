<template>
  <div class="scroll-y">
    <div
      ref="refBox"
      class="box text-center"
      :style="`height: ${props.height}`"
    >
      <div :style="`height: calc(${props.height}/2)`"></div>
      <div
        v-for="(item, line) in props.lyrics"
        :key="item.time"
      >
        <div
          v-if="item.content"
          :ref="el => { refs[line] = el }"
          class="big-font padding"
          :style="{
            color: getTextColor(line),
          }"
        >
          {{ item.content }}
        </div>
      </div>
      <div :style="`height: calc(${props.height}/2)`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue'
import { lyricsType } from '@/types/types'

const emit = defineEmits(['update:line'])
const props = defineProps({
  height: {
    type: String,
    default: '70vh',
  },
  lyrics: {
    type: Array as PropType<lyricsType[]>,
    default: () => ([]),
  },
  currentTime: {
    type: Number,
    default: 0,
  },
  currentLine: {
    type: Number,
    default: 0,
  },
})

const refs: any = ref([])
const refBox: any = ref(null)
const isMoving = ref(false)
const domrects: any = ref([])
const dropIndex = ref(props.currentLine)
const getTextColor = computed(() => {
  return function(line: number) {
    if (isMoving.value) {
      if (line === dropIndex.value) {
        return '#fff'
      } else {
        return '#8f8f8f'
      }
    } else {
      if (line === props.currentLine) {
        if (props.lyrics[line].content && refs.value[line]) {
          refs.value[line].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
        return '#fff'
      } else {
        return '#8f8f8f'
      }
    }
  }
})
const touchstart = function () {
  isMoving.value = true
}
const touchmove = function () {
  const { top } = refBox.value.getBoundingClientRect()
  for (let i = domrects.value.length - 1; i >= 0; i--) {
    if (-top + (domrects.value[i]?.height) * 10 >= domrects.value[i]?.top) {
      dropIndex.value = i
      break
    }
  }
}
const touchend = function () {
  isMoving.value = false
  refs.value[dropIndex.value].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
  emit('update:line', dropIndex.value)
}
const listenTouchstart = function () {
  refBox.value.addEventListener('touchstart', touchstart)
}
const listenTouchmove = function () {
  refBox.value.addEventListener('touchmove', touchmove)
}
const listenTouchend = function () {
  refBox.value.addEventListener('touchend', touchend)
}

const getDOMRects = function () {
  for (const i of refs.value) {
    domrects.value.push(i?.getBoundingClientRect())
  }
}

onMounted(() => {
  listenTouchstart()
  listenTouchmove()
  listenTouchend()
  getDOMRects()
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.box {
  width: 100vw;
}

.padding {
  padding-top: 2vh;
}
</style>