<script setup lang="ts">

import AppCarousel from "@/components/app/AppCarousel.vue";
import AlbumCard from "@/components/music/AlbumCard.vue";

</script>

<template>
  <div class="py-42px">
    <div class="px-42px text-24px font-weight-bold">主页</div>
    <div class="mt-16px mb-16px">
      <div class="px-42px text-16px font-weight-bold">专属精选推荐</div>
      <AppCarousel
        :gap="16"
        :total-size="10"
        :min-card-width="240"
        :label-top="21"
      >
        <template #default="{index}">
          <div class="flex-auto min-w-240px flex flex-col">
            <div class="text-14px my-12px opacity-60">最新发行</div>
            <div class="flex-1 aspect-ratio-5/6 rd-12px bg-green">
              {{ index }}
            </div>
          </div>
        </template>
      </AppCarousel>
    </div>
    <div class="mt-36px">
      <div class="px-42px py-12px text-16px font-weight-bold">最近播放</div>
      <AppCarousel
        :gap="16"
        :total-size="10"
        :min-card-width="200"
        :label-bottom="64"
      >
        <template #default="{ index }">
          <AlbumCard
            cover-img="/src/assets/album-cover.jpg"
            title="The World From the Side of the Moon (Deluxe Version)"
            subtitle="Phillip Phillips"
          />
        </template>
      </AppCarousel>
    </div>
  </div>
  <div class="h-100vh"></div>
</template>

<style scoped lang="sass">

</style>
