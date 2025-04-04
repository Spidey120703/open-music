<script setup lang="ts">

import AlbumCardGrid from '@/components/music/AlbumCardGrid.vue'

const { setTitle } = inject<any>('navbar')
setTitle('最近添加')

const recentList = ref([
  { label: '今天', count: 8 },
  { label: '昨天', count: 2 },
  { label: '本周', count: 12 },
  { label: '上周', count: 4 },
  { label: '本月', count: 18 },
  { label: '上个月', count: 12 },
])

const opened = computed(() => recentList.value.map((_, i) => i))

</script>

<template>
  <v-expansion-panels
    flat
    multiple
    :model-value="opened"
  >
    <v-expansion-panel
      v-for="({ label, count }, index) in recentList"
      :value="index"
    >
      <template #title>
        <div class="text-16px font-weight-bold">{{ label }}</div>
      </template>
      <template #text>
        <AlbumCardGrid class="py-0" :count="count" />
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="sass">

:deep(.v-expansion-panel-title)
  padding: 36px !important
  position: sticky
  top: 116px
  z-index: 3
  background: rgba(255,255,255,.5)
  backdrop-filter: blur(42px)
  .v-expansion-panel-title__overlay
    display: none
:deep(.v-expansion-panel-text__wrapper)
  padding: 0 !important

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
