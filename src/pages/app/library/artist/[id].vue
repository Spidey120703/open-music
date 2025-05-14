<script setup lang="ts">
import AlbumCarousel from "@/components/music/AlbumCarousel.vue";
import SongCarousel from "@/components/music/SongCarousel.vue";

const route = useRoute()
const artistId = (route.params as any).id

console.log(artistId)
</script>

<template>
  <div>
    <div class="w-100% h-75vh relative">
      <v-parallax
        width="100%"
        height="100%"
        max-height="100%"
        aspect-ratio="3/2"
        cover
        src="/src/assets/artist-avatar.jpg"
      />
      <div class="absolute bottom-0 left-0 right-0 pa-36px flex items-center justify-space-between gap-36px">
        <div class="blur-mask" />
        <div class="flex items-center gap-16px">
          <v-btn
            class="w-36px! h-36px! text-20px!"
            color="#ff6900"
            flat
            icon="mdi-play"
          />
          <div
            class="text-28px font-weight-bold cursor-pointer c-white text-shadow relative"
          >
            Coldplay
          </div>
        </div>
        <div class="flex items-center gap-16px">
          <v-btn
            class="w-32px! h-32px! text-12px! hover:bg-[#ff6900]! hover:c-white!"
            flat
            icon="mdi-star"
          />
          <v-btn
            class="blur-btn w-32px! h-32px! text-16px!"
            flat
            icon="mdi-dots-horizontal"
          />
        </div>
      </div>
    </div>
    <div class="mt-36px">
      <SectionTitle title="歌曲排行" :size="16" has-more class="px-42px" />
      <SongCarousel class="mt-12px" />
    </div>
    <div class="mt-36px">
      <SectionTitle title="代表专辑" :size="16" has-more class="px-42px" />
      <AlbumCarousel class="mt-12px" />
    </div>
    <div class="mt-36px">
      <SectionTitle title="专辑" :size="16" has-more class="px-42px" />
      <AlbumCarousel class="mt-12px" />
    </div>
    <div class="mt-36px">
      <SectionTitle title="单曲与 EP" :size="16" has-more class="px-42px" />
      <AlbumCarousel class="mt-12px" />
    </div>
    <div class="mt-36px">
      <SectionTitle title="现场专辑" :size="16" has-more class="px-42px" />
      <AlbumCarousel class="mt-12px" />
    </div>
    <div class="mt-36px">
      <SectionTitle title="合集" :size="16" has-more class="px-42px" />
      <AlbumCarousel class="mt-12px" />
    </div>
  </div>
</template>

<style scoped lang="sass">

.blur-mask
  position: absolute
  inset: 0
  z-index: 0
  backdrop-filter: blur(10px)
  mask-image: linear-gradient(to bottom, transparent, black 50%)

.blur-btn
  color: white !important
  background: rgba(0, 0, 0, .65)
  backdrop-filter: blur(10px)

  &:hover
    background: #ff6900

</style>
