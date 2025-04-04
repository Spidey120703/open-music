<script setup lang="ts">

const { setTitle } = inject<any>('navbar')
setTitle('歌曲')

const config = {
  title: { hasMore: true },
  like: { hover: true }
}

</script>

<template>
  <SongList
    columns="no,title,duration,artist,album,like"
    height="calc(100vh - 158px)"
    :extra-config="config"
  />
</template>

<style scoped lang="sass">

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
