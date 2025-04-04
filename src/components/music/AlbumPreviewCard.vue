<script setup lang="ts">

import SongList from "@/components/music/SongList.vue";
</script>

<template>
  <div class="flex gap-18px mt-36px">
    <div class="album-section">
      <div class="album-cover w-220px aspect-ratio-square rd-6px overflow-hidden relative">
        <v-img
          src="/src/assets/album-cover.jpg"
        />
        <div class="btn-inset absolute inset-0 pa-12px flex justify-center items-center">
          <v-btn class="w-fit! h-fit! pa-12px! text-32px! c-white! blur-btn" flat icon="mdi-play" />
        </div>
      </div>
      <div class="mt-8px opacity-50 text-12px font-weight-bold">3 首歌曲，16 分钟</div>
    </div>
    <div class="flex-1">
      <div class="pl-18px">
        <div class="text-18px font-weight-bold">The World From the Side of the Moon (Deluxe Version)</div>

        <div class="flex justify-space-between items-center px-8px">
          <div class="text-14px font-weight-bold opacity-50">Pop<span class="inline-block w-.25em h-.25em rd-full bg-current vertical-mid mx-.25em" />2012</div>
          <div class="flex items-center gap-10px px-3px">
            <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
              <v-icon icon="mdi-arrow-down" size="16" />
            </v-btn>
            <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
              <v-icon icon="mdi-dots-horizontal" size="16" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="py-8px">
        <SongList columns="no,title,duration,like,download,more" hide-header />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.album-cover
  &:hover
    .btn-inset
      display: flex
  .btn-inset
    display: none
    .blur-btn
      background: rgba(0, 0, 0, .35)
      backdrop-filter: blur(10px)

      &:hover
        background: #ff6900

</style>
