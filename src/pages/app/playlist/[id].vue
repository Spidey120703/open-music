<script setup lang="ts">
const route = useRoute()
const albumId = route.params.id

console.log(albumId)
</script>

<template>
  <div>
    <div class="pa-36px pr-0 flex gap-36px">
      <div class="aspect-ratio-square rd-6px overflow-hidden h-300px">
        <v-img
          src="/src/assets/album-cover.jpg"
        />
      </div>
      <div class="flex-1 h-300px flex flex-column">
        <div class="flex-1 py-36px">
          <div class="text-24px font-weight-black">The World From the Side of the Moon (Deluxe Version)</div>
          <div class="text-14px font-weight-black opacity-50">18首歌曲<span class="inline-block w-.25em h-.25em rd-full bg-current vertical-mid mx-.25em" />1小时15分钟</div>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-12px">
            <v-btn variant="flat" color="#ff6900" class="pl-18px! pr-20px! py-6px! rd-6px! min-w-unset! h-fit!">
              <v-icon icon="mdi-play" :size="20" />
              <span class="text-12px">播放</span>
            </v-btn>
            <v-btn variant="flat" color="#ff6900" class="pl-18px! pr-20px! py-6px! rd-6px! min-w-unset! h-fit!">
              <v-icon icon="mdi-shuffle" :size="20" />
              <span class="text-12px">随机播放</span>
            </v-btn>
          </div>
          <div class="flex items-center gap-10px px-3px mr-8px">
            <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
              <v-icon icon="mdi-arrow-down" size="16" />
            </v-btn>
            <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
              <v-icon icon="mdi-dots-horizontal" size="16" />
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <SongList
      simple-header
      columns="like,title,download,duration,more"
      :extra-config="{
        title: {
          title: '歌曲',
          withCover: true
        },
        like: {
          hover: true,
          square: true
        },
        no: {
          hoverPlay: true
        },
        download: {
          square: true
        },
        more: {
          square: true
        },
      }"
    />
    <div class="pa-36px line-height-tight text-13px font-weight-black opacity-60">
      <div>18首歌曲、1小时15分钟</div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
