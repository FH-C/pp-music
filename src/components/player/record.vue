<template>
  <div>
    <div class="outermost">
      <van-swipe
        ref="swipeRef"
        :loop="false"
        :show-indicators="false"
        class="swipe"
        :initial-swipe="initialSwipe"
      >
        <van-swipe-item
          v-for="src in props.imageSrcList"
          :key="src"
        >
          <div :class="['outer', {'rotate': props.rotate}]">
            <div class="inner">
              <!-- <van-image
            round
            :src="props.imageSrc"
            class="image"
          /> -->
              <van-image
                round
                :src="src"
                class="image"
              />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwipeInstance } from 'vant'
import { PropType, ref } from 'vue'

const swipeRef = ref<SwipeInstance>()
const props = defineProps({
  imageSrcList: {
    type: Array as PropType<string[]>,
    default: () => {
      return []
    },
  },
  rotate: {
    type: Boolean,
    default: false,
  },
  initialSwipe: {
    type: Number,
    default: 0,
  },
})

const next = function () {
  swipeRef.value?.next()
}

const prev = function () {
  swipeRef.value?.prev()
}

const swipeTo = function (index: number) {
  swipeRef.value?.swipeTo(index)
}

defineExpose({
  next,
  prev,
  swipeTo,
})
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
.inner {
  background-color: rgba(108, 113, 115, 0.5);
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  z-index: 4;
  position: relative;
  top: 9.25vw;
  left: 9.25vw;
  border: 1vw solid rgba(11, 6, 8, 0.8);
}

.outer {
  background-image: linear-gradient(to bottom, #121214, #141416 40%, #272729 50%, #141416 60%, #121214);
  height: 70vw;
  width: 70vw;
  border-radius: 50%;
  z-index: 3;
  position: relative;
  left: 15vw;
  top: 1.5vw;
}

.outermost {
  background-color: rgba(108, 111, 111, 0.1);
  height: 73vw;
  width: 73vw;
  border-radius: 50%;
  z-index: 1;
  position: relative;
  left: 13.5vw;
}

.image {
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  z-index: 5;
  position: relative;
}

.swipe {
  width: 100vw;
  position: relative;
  right: 13.5vw;
  z-index: 2;
  height: 41vh;
}
</style>
