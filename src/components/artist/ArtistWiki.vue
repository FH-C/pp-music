<template>
  <div class="card">
    <div class="bold text1">艺人百科</div>
    <div class="mini-font text2 text-line-5">歌手简介：{{ props.introduction }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  introduction: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.card {
  background-color: #fff;
  border-radius: 20px;
  text-align: left;

  .text1 {
    padding: 80px 40px 40px;
  }
  .text2 {
    padding: 0 40px;
  }

  padding-bottom: 40px;
}
</style>
