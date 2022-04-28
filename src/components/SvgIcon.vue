<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
    :style="{color: color}"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})
const iconName = computed(() => {
  return `#icon-${props.name}`
})
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  } else {
    return 'svg-icon'
  }
})
</script>

<style scoped>
.svg-icon {
  width: 48px;
  height: 48px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
