<template>
  <div>
    <ProgressVue
      style="width: 50vw;background-color: aqua;position: absolute;top: 10%;left: 10%;"
    ></ProgressVue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressVue from 'components/Progress.vue'
const percentage = ref(0)
const strokeWidth = ref('20px')
const color = ref('#1989fa')
const trackColor = ref('#e5e5e5')
const pivotColor = ref('#1989fa')
const pivotSize = ref('30px')
</script>

<style scoped>

</style>
