<script setup lang="ts">

const headers = [
  {
    title: '',
    align: 'center',
    key: 'no',
    width: 42
  },
  { title: '标题', align: 'start', key: 'title' },
  { title: '☆', align: 'center', key: 'like', width: 38 },
  { title: '', align: 'center', key: 'downloaded', width: 38 },
  { title: '时长', align: 'center', key: 'duration', width: 64 },
  { title: '', align: 'center', key: 'more', width: 52 },
]

const songs = new Array(10).fill(null)
  .map((_, i) => ({
    no: i + 1,
    title: `歌曲${i + 1}`,
    duration: '03:04',
    like: Math.random() > .5,
  }))

</script>

<template>
  <v-data-table
    :headers="headers"
    :items="songs"
    hide-default-footer
    hide-default-header
    hover
  >
    <template #no-data>
      <div class="opacity-60">暂无歌曲</div>
    </template>
    <template #item.no="{ item }">
      <div class="opacity-65">{{ item.no }}</div>
    </template>
    <template #item.downloaded="{ item }">
      <v-btn
        v-if="! item.downloaded"
        variant="text"
        color="#ff6900"
        class="px-10px! py-4px! min-w-unset! h-fit!"
      >
        <v-icon
          icon="mdi-arrow-down"
          size="14"
        />
      </v-btn>
    </template>
    <template #item.like="{ item }">
      <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
        <v-icon
          :icon="item.like ? 'mdi-star' : 'mdi-star-outline'"
          size="14"
        />
      </v-btn>
    </template>
    <template #item.more="{ item }">
      <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
        <v-icon
          icon="mdi-dots-horizontal"
          size="16"
        />
      </v-btn>
    </template>
  </v-data-table>
</template>

<style scoped lang="sass">

.v-table
  --v-table-row-height: 46px
  --v-hover-opacity: .04

:deep(.v-table__wrapper)
  tbody
    tr.v-data-table__tr
      border-radius: 300px
      overflow: hidden
      td.v-data-table__td, th.v-data-table__th
        padding: 0
        border-bottom: 4px solid transparent
        &:first-child::after
          border-top-left-radius: 6px
          border-bottom-left-radius: 6px
        &:last-child::after
          border-top-right-radius: 6px
          border-bottom-right-radius: 6px
      &:hover
        td.v-data-table__td::after
          background-color: rgba(var(--v-border-color), calc(var(--v-hover-opacity) * 2)) !important

      &:nth-child(even)
        td.v-data-table__td::after
          content: ""
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          background-color: rgba(var(--v-border-color), var(--v-hover-opacity))
          pointer-events: none

</style>
