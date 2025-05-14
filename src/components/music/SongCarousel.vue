<script setup lang="ts">

import AppCarousel from "@/components/app/AppCarousel.vue";

</script>

<template>
  <AppCarousel
    :gap="16"
    :total-size="10"
    :min-card-width="280"
    :rows="3"
    :row-gap="0"
  >
    <template #default="{ index }">
      <div
        :id="index"
        class="hover-target flex items-center gap-12px w-100% overflow-hidden py-12px"
        style="border-top: 1px solid rgba(0,0,0,.12)"
      >
        <div
          class="w-42px h-42px rd-4px overflow-hidden cursor-pointer relative flex-none"
        >
          <v-img
            src="/src/assets/album-cover.jpg"
            :width="42"
            :height="42"
            aspect-ratio="square"
          />
          <div class="hover-show bg-#00000066 absolute inset-0">
            <div class="flex justify-center items-center w-100% h-100%">
              <v-icon
                icon="mdi-play"
                :size="24"
                color="white"
                style="text-shadow: 0 0 8px white"
              />
            </div>
          </div>
        </div>
        <div class="text-14px flex-1 hover-change">
          <div class="truncate cursor-pointer">Gone, Gone, Gone</div>
          <div class="truncate opacity-60 cursor-pointer">The World From the Side of the Moon (Deluxe Version)</div>
        </div>
        <div class="flex items-center gap-10px">
          <v-btn variant="text" color="#ff6900" class="hover-show px-10px! py-6px! min-w-22px! h-fit!">
            <v-icon icon="mdi-plus" size="20" />
          </v-btn>
          <v-btn variant="text" color="#ff6900" class="px-10px! py-6px! min-w-22px! h-fit!">
            <v-icon icon="mdi-dots-horizontal" size="20" />
          </v-btn>
        </div>
      </div>
    </template>
  </AppCarousel>
</template>

<style scoped lang="sass">

.hover-target
  .hover-change
    width: calc(100% - 110px)
  .hover-show
    display: none
  &:hover
    .hover-change
      width: calc(100% - 162px)
    .hover-show
      display: block

</style>
