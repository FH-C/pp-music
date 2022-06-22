<template>
  <van-field
      ref="refInput"
      v-model="searchStore.searchKeyword"
      clearable
      :placeholder="placeholder"
      class="input-field"
      size="large"
      @update:model-value="onUpdate"
      @keydown.enter="search()"
    >
      <template #left-icon>
        <van-icon
          name="arrow-left"
          style="padding-right: 10px;"
          @click="onClickLeft"
        />
      </template>
    </van-field>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/store/search'
import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch
} from '@/api/search'
defineProps({
  placeholder: {
    type: String,
    default: undefined
  }
})
const searchStore = useSearchStore()
const onUpdate = async function (value: string) {
  if (!value) {
    return
  }
  const res = await searchSuggest({
    keywords: value,
    type: 'mobile'
  })
  searchStore.searchSuggestList = res.result.allMatch
}
</script>

<style scoped>

</style>
