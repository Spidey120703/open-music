<script setup lang="ts">

const { setTitle } = inject<any>('navbar')
setTitle('专辑')

</script>

<template>
  <AlbumCardGrid :count="30" />
</template>

<style scoped lang="sass">
</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>

