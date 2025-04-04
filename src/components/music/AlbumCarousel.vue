<script setup lang="ts">

import AlbumCard from "@/components/music/AlbumCard.vue";
import AppCarousel from "@/components/app/AppCarousel.vue";

</script>

<template>
  <AppCarousel
    :gap="16"
    :total-size="10"
    :min-card-width="200"
    :label-bottom="64"
  >
    <template #default="{ index }">
      <AlbumCard
        :id="index"
        cover-img="/src/assets/album-cover.jpg"
        title="The World From the Side of the Moon (Deluxe Version)"
        subtitle="Phillip Phillips"
      />
    </template>
  </AppCarousel>
</template>

<style scoped lang="sass">

</style>
