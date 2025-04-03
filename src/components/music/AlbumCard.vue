<script setup lang="ts">

withDefaults(defineProps<{
  coverImg?: string
  title: string
  subtitle?: string
  size?: number
}>(), {
  coverImg: '',
  subtitle: '',
  size: 200
})

</script>

<template>
  <div class="cover-card flex flex-col" :style="{ minWidth: `${size}px` }">
    <div class="aspect-ratio-square rd-6px overflow-hidden relative">
      <slot name="cover">
        <v-img
          :src="coverImg"
        />
      </slot>
      <div class="btn-inset absolute inset-0 pa-12px flex justify-space-between items-end">
        <v-btn class="w-32px! h-32px! text-16px! c-white! blur-btn" flat icon="mdi-play" />
        <v-btn class="w-32px! h-32px! text-14px! c-white! blur-btn" flat icon="mdi-dots-horizontal" />
      </div>
    </div>
    <div class="text-14px">
      <div class="ellipsis-2">{{ title }}</div>
      <div v-show="subtitle" class="truncate opacity-60">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.cover-card
  &:hover
    .btn-inset
      display: flex
  .btn-inset
    display: none
    .blur-btn
      background: rgba(0, 0, 0, .65)
      backdrop-filter: blur(10px)

      &:hover
        background: #ff6900

.ellipsis-2
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 2
  overflow: hidden
  text-overflow: ellipsis

</style>
