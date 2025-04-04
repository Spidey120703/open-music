<script setup lang="ts">

const { setTitle } = inject<any>('navbar')
setTitle('所有播放列表')

</script>

<template>
  <div>
    <SectionTitle title="所有播放列表" :size="16" class="px-36px pt-36px" />
    <AlbumCardGrid />
  </div>
</template>

<style scoped lang="sass">

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
