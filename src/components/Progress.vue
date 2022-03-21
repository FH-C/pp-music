<template>
  <div>
    <div
      ref="trackBar"
      class="track-bar"
      :style="trackStyle"
    >
      <div
        class="stroke-bar"
        :style="strokeStyle"
      >
        <div
          ref="pivot"
          class="pivot"
          :style="pivotStyle"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  },
  strokeWidth: {
    type: String,
    default: '5px',
  },
  color: {
    type: String,
    default: 'red',
  },
  trackColor: {
    type: String,
    default: 'black',
  },
  pivotColor: {
    type: String,
    default: 'green',
  },
  pivotSize: {
    type: String,
    default: '10px',
  },
})

const pivot: any = ref(null)
const trackBar: any = ref(null)
const strokeWidth = computed(() => {
  return `height:${ props.strokeWidth };`
})
const color = computed(() => {
  return `background-color:${ props.color };`
})
const trackColor = computed(() => {
  return `background-color:${ props.trackColor };`
})
const pivotColor = computed(() => {
  return `background-color:${ props.pivotColor };`
})
const pivotSize = computed(() => {
  return `width:${ props.pivotSize };height:${ props.pivotSize };`
})
// const pivotLeft = computed(() => {
//   return `left:${ props.percentage }%;`
// })
const trackStyle = computed(() => {
  return `${ strokeWidth.value }${ trackColor.value }`
})
const strokeStyle = computed(() => {
  return `${ strokeWidth.value }${ color.value }width:${ props.percentage }%;`
})
const pivotStyle = computed(() => {
  return `${ pivotSize.value }${ pivotColor.value }bottom:calc(${ props.pivotSize }/4);left:calc(100%);`
})
const touchstart = function (e: any) {
  const { clientX } = e.touches[0]
  const { left } = pivot.value.getBoundingClientRect()
  const percentage = (clientX - left) / trackBar.value.clientWidth * 100
  console.log('clientX', clientX)
  console.log('left', left)
  console.log('percentage', percentage)
  props.percentage = percentage
  console.log('props.percentage', props.percentage)
}
const listenTouchstart = function () {
  pivot.value.addEventListener('touchstart', (e) => {
    console.log(e)
  })
}
const listenTouchmove = function () {
  pivot.value.addEventListener('touchmove', touchstart)
}
const listenTouchend = function () {
  pivot.value.addEventListener('touchend', (e) => {
    console.log(e)
  })
}
onMounted(() => {
  listenTouchstart()
  listenTouchmove()
  listenTouchend()
})
</script>

<style scoped lang="scss">
.track-bar {
  position: relative;
  border-radius: 200px;
  .stroke-bar {
    border-radius: 200px;
    position: relative;
    .pivot {
      position: relative;
      border-radius: 50%;
    }
  }
}
</style>
