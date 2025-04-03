<script setup lang="ts">

const { setTitle } = inject<any>('navbar')
setTitle('专辑')

</script>

<template>
  <div
    class="pa-36px grid gap-16px w-100%"
    style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"
  >
    <AlbumCard
      v-for="i in 30"
      :key="`p-${i}`"
      cover-img="/src/assets/album-cover.jpg"
      title="The World From the Side of the Moon (Deluxe Version)"
      subtitle="Phillip Phillips"
      :size="200"
    />
  </div>
</template>

<style scoped lang="sass">
</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>

