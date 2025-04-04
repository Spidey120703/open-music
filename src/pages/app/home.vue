<script setup lang="ts">

import AppCarousel from "@/components/app/AppCarousel.vue";
import AlbumCard from "@/components/music/AlbumCard.vue";
import AlbumCarousel from "@/components/music/AlbumCarousel.vue";

</script>

<template>
  <div class="py-42px">
    <div class="px-42px text-24px font-weight-bold">主页</div>
    <div class="mt-16px mb-16px">
      <SectionTitle title="专属精选推荐" :size="16" class="px-42px" />
      <AppCarousel
        :gap="16"
        :total-size="10"
        :min-card-width="240"
        :label-top="21"
      >
        <template #default="{index}">
          <div class="flex-auto min-w-240px flex flex-col select-none">
            <div class="text-14px my-12px opacity-60">最新发行</div>
            <div
              class="flex-1 aspect-ratio-5/6 rd-12px relative overflow-hidden"
              style="
                background-image: url('/src/assets/artist-avatar.jpg');
                background-size: cover;
              "
            >
              <div
                class="absolute left-0 bottom-0 right-0 h-48px pa-12px c-white flex items-center justify-center"
                style="background: rgba(0,0,0,.64); backdrop-filter: blur(32px);"
              >
                <div>酷玩即将到来！</div>
              </div>
            </div>
          </div>
        </template>
      </AppCarousel>
    </div>
    <div class="mt-36px">
      <SectionTitle title="最近播放" :size="16" has-more class="px-42px py-12px" />
      <AlbumCarousel />
    </div>
    <div class="mt-36px">
      <SectionTitle title="新内容" :size="16" class="px-42px py-12px" />
      <AppCarousel
        :gap="16"
        :total-size="30"
        :min-card-width="200"
        :label-bottom="64"
        :rows="2"
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
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
