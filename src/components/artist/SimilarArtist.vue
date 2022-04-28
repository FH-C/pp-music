<template>
  <div
    class="container flex-column align-items-center flex-shrink-0"
  >
    <van-image
      round
      class="mini-icon"
      :src="props.info.picUrl"
      style="margin-top: 1.5vh;"
    />
    <div class="small-font name">
      {{ props.info.name }}
    </div>
    <div
      class="small-font"
      style="color: #b2b2b2;"
    >
      {{ followCount(props.info.fansCount) + '粉丝' }}
    </div>
    <div
      class="button"
      @click="emit('follow', {id: props.info.id, follow: !props.info.followed})"
    >
      <van-button
        v-if="!props.info.followed"
        round
        color="#fe4545"
        size="mini"
        plain
      >
        + 关注
      </van-button>
      <van-button
        v-else
        round
        color="#a0a0a0"
        size="mini"
        icon="success"
        plain
      >
        已关注
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { numberConvert } from '@/utils/convert'
import { computed } from 'vue'
const emit = defineEmits(['follow'])
const props = defineProps({
  info: {
    type: Object as any,
    default: () => ({}),
  },
})
const followCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.container {
  margin-left: 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
  width: 27vw;
}

.name {
  font-weight: 600;
  padding-top: 1vh;
}

.button {
  padding: .5vh 0;
}
</style>
