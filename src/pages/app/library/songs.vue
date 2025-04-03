<script setup lang="ts">

const { setTitle } = inject<any>('navbar')
setTitle('歌曲')

</script>

<template>

</template>

<style scoped lang="sass">

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
