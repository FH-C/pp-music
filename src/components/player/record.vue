<template>
  <div>
    <div :class="['outer', {'rotate': props.rotate}]">
      <div class="inner">
        <van-image
          round
          :src="props.imageSrc"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  rotate: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
.inner {
  background-color: rgba(108, 113, 115, 0.5);
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  z-index: 3;
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
  z-index: 2;
  position: relative;
  left: 15vw;
  border: 1.5vw solid rgba(108, 111, 111, 0.1);
}

.image {
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  z-index: 4;
  position: relative;
}
</style>
