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
      <div
        ref="transparent"
        class="transparent-bar"
        :style="transparentStyle"
      >
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
const emit = defineEmits(['update:percentage', 'update:percentageDelay'])
const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  },
  strokeWidth: {
    type: String,
    default: '.2vh',
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
    default: '#fff',
  },
  pivotSize: {
    type: String,
    default: '.8vh',
  },
})

const isMoving = ref(false)
const pivot: any = ref(null)
const trackBar: any = ref(null)
const transparent: any = ref(null)
const percentage = ref(props.percentage)
const pivotSizeVar = ref(props.pivotSize)
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
  return `width:${ pivotSizeVar.value };height:${ pivotSizeVar.value };`
})
// const pivotLeft = computed(() => {
//   return `left:${ props.percentage }%;`
// })
const trackStyle = computed(() => {
  return `${ strokeWidth.value }${ trackColor.value }`
})
const strokeStyle = computed(() => {
  return `${ strokeWidth.value }${ color.value }width:${ percentage.value }%;`
})
const pivotStyle = computed(() => {
  return `${ pivotSize.value }${ pivotColor.value }bottom:calc(${ pivotSizeVar.value }/3);left:calc(100%);`
})

const transparentStyle = computed(() => {
  return `height:calc(${ props.strokeWidth } * 11);bottom:calc(${ props.strokeWidth } * 5);`
})

const touchstart = function () {
  isMoving.value = true
  pivotSizeVar.value = `calc(${ props.pivotSize }*2)`
}
const touchmove = function (e: any) {
  const { clientX } = e.touches[0]
  const { left } = trackBar.value.getBoundingClientRect()
  let percentageNew = (clientX - left) / trackBar.value.clientWidth * 100
  if (percentageNew < 0) {
    percentageNew = 0
  } else if (percentageNew > 100) {
    percentageNew = 100
  }
  percentage.value = percentageNew
  emit('update:percentageDelay', percentage.value)
}
const touchend = function () {
  pivotSizeVar.value = props.pivotSize
  isMoving.value = false
  emit('update:percentage', percentage.value)
}
const listenTouchstart = function () {
  pivot.value.addEventListener('touchstart', touchstart)
  transparent.value.addEventListener('touchstart', touchstart)
}
const listenTouchmove = function () {
  pivot.value.addEventListener('touchmove', touchmove)
  transparent.value.addEventListener('touchmove', touchmove)
}
const listenTouchend = function () {
  pivot.value.addEventListener('touchend', touchend)
  transparent.value.addEventListener('touchend', touchend)
}
watch(() => {
  return props.percentage
}, (newValue: number) => {
  if (!isMoving.value) {
    percentage.value = newValue
  }
})
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
  .transparent-bar {
    background-color: transparent;
    position: relative;
  }
}
</style>
