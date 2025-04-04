<script setup lang="ts">

const props = withDefaults(defineProps<{
  columns?: string
  hideHeader?: boolean
  simpleHeader?: boolean
  height?: string
  disableSorting?: boolean
  extraConfig?: Record<string, Record<string, any>>
}>(), {
  columns: '',
  hideHeader: false,
  simpleHeader: false,
  height: '',
  disableSorting: false,
  extraConfig: () => ({})
})

const headers = [
  { title: '', align: 'center', key: 'no', width: 48, hoverPlay: false },
  { title: '标题', align: 'start', key: 'title', hasMore: false, withCover: false },
  { title: '时长', align: 'center', key: 'duration', width: 56 },
  { title: '艺人', align: 'start', key: 'artist' },
  { title: '专辑', align: 'start', key: 'album' },
  { title: '类型', align: 'start', key: 'genre' },
  { title: '☆', align: 'center', key: 'like', width: 48, sortable: false, hover: false, square: false },
  { title: '', align: 'center', key: 'download', width: 45, sortable: false, hover: true, square: false },
  { title: '', align: 'center', key: 'more', width: 52, sortable: false, hover: false, square: false },
]

const $headers = computed(() => {
  const columns = props.columns === '' ? headers.map(h => h.key) : props.columns.split(',')
  return columns
    .map(key => {
      const header = headers.find(h => h.key === key)
      if (header) return header
      return {
        title: key,
        align: 'start',
        key,
      }
    })
    .map(h => Object.assign(h, {
      sortable: ! props.simpleHeader && ! props.disableSorting && h.sortable,
      ... (props.extraConfig[h.key] ?? {})
    }))
})

console.log($headers.value)


const songs = new Array(10).fill(null)
  .map((_, i) => ({
    no: i + 1,
    cover: '/src/assets/album-cover.jpg',
    title: `歌曲${i + 1}`,
    duration: '03:04',
    like: Math.random() > .5,
  }))

</script>

<template>
  <v-data-table
    :headers="$headers"
    :items="songs"
    hide-default-footer
    :hide-default-header="hideHeader"
    sort-asc-icon="mdi-chevron-up"
    sort-desc-icon="mdi-chevron-down"
    hover
    :height="height"
    :class="{ 'simple-header': simpleHeader }"
  >
    <template #no-data>
      <div class="opacity-60">暂无歌曲</div>
    </template>
    <template #item.no="{ item, column }">
      <div class="opacity-65" :class="[ column.hoverPlay && 'hover-hide' ]">{{ item.no }}</div>
      <v-btn
        v-show="column.hoverPlay"
        variant="text"
        color="#ff6900"
        class="min-w-unset! h-30px! w-30px! pa-0!"
        :class="[ column.hoverPlay && 'hover-show' ]"
      >
        <v-icon
          icon="mdi-play"
          size="16"
        />
      </v-btn>
    </template>
    <template #item.title="{ item, column }">
      <div class="flex items-center gap-12px">
        <div
          v-show="column.withCover"
          class="w-42px h-42px rd-4px overflow-hidden relative cursor-pointer"
        >
          <v-img
            :src="item.cover"
            :width="42"
            :height="42"
            aspect-ratio="square"
          />
          <div class="hover-show-flex bg-#00000066 absolute inset-0 flex justify-center items-center">
            <v-icon
              icon="mdi-play"
              :size="24"
              color="white"
              style="text-shadow: 0 0 8px white"
            />
          </div>
        </div>
        <div v-if="column.hasMore">
          <div class="flex items-center">
            <div class="flex-1 truncate">{{ item.title }}</div>
            <div>
              <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
                <v-icon
                  icon="mdi-dots-horizontal"
                  size="16"
                />
              </v-btn>
            </div>
          </div>
        </div>
        <div v-else>{{ item.title }}</div>
      </div>
    </template>
    <template #item.download="{ item, column }">
      <v-btn
        v-show="! item.download"
        variant="text"
        color="#ff6900"
        class="px-10px! py-4px! min-w-unset!"
        :class="[ column.hover && 'hover-show', column.square ? 'w-30px! h-30px! pa-0!' : 'h-fit!' ]"
      >
        <v-icon
          icon="mdi-arrow-down"
          size="16"
        />
      </v-btn>
    </template>
    <template #header.like>
      <v-icon
        icon="mdi-star-outline"
        size="14"
      />
    </template>
    <template #item.like="{ item, column }">
      <v-btn
        variant="text"
        color="#ff6900"
        class="px-10px! py-4px! min-w-unset!"
        :class="[ column.hover && ! item.like && 'hover-show', column.square ? 'w-30px! h-30px! pa-0!' : 'h-fit!' ]"
      >
        <v-icon
          :icon="item.like ? 'mdi-star' : 'mdi-star-outline'"
          size="14"
        />
      </v-btn>
    </template>
    <template #item.more="{ item, column }">
      <v-btn
        variant="text"
        color="#ff6900"
        class="px-10px! py-4px! min-w-unset!"
        :class="[ column.hover && 'hover-show', column.square ? 'w-30px! h-30px! pa-0!' : 'h-fit!' ]"
      >
        <v-icon
          icon="mdi-dots-horizontal"
          size="16"
        />
      </v-btn>
    </template>
<!--    <template #item="data">-->
<!--      <tr class="v-data-table__tr">-->
<!--        <td-->
<!--          v-for="(column, index) in data.columns"-->
<!--          :key="`td-${index}`"-->
<!--          class="v-data-table__td"-->
<!--          :class="[column.align && `v-data-table-column&#45;&#45;align-${column.align}`]"-->
<!--          :style="[column.width && `width: ${column.width}px`]"-->
<!--        >-->
<!--          {{ column.slot?.(data) ?? data.item[column.key] }}-->
<!--        </td>-->
<!--      </tr>-->
<!--    </template>-->
  </v-data-table>
</template>

<style scoped lang="sass">

.v-table
  --v-table-row-height: 46px
  --v-hover-opacity: .04
  --v-table-header-height: 46px
.v-table.simple-header
  --v-table-header-height: fit-content
  :deep(.v-data-table__th)
    box-shadow: none
    border-bottom-width: 0
    font-weight: bolder
    opacity: .75

:deep(.v-table__wrapper)
  thead
    tr
      position: sticky
      top: 0
      z-index: 1
      background: rgba(255, 255, 255, 0.48)
      backdrop-filter: saturate(50%) blur(16px)
      th.v-data-table__td
        position: relative
        padding: 0 4px
        box-shadow: 0 0 0 .5px rgba(0, 0, 0, 0.12)
        div.v-data-table-header__content
          flex-direction: row !important
          justify-content: space-between
          .v-icon
            margin-right: -4px
  tbody
    tr.v-data-table__tr
      border-radius: 300px
      overflow: hidden
      &:first-child td.v-data-table__td
        border-top: 4px solid transparent
      &:last-child td.v-data-table__td
        border-bottom: 4px solid transparent
      td.v-data-table__td
        padding: 4px
        border-bottom: 4px solid transparent
        &:first-child
          border-left: 4px solid transparent
          &::after
            border-top-left-radius: 6px
            border-bottom-left-radius: 6px
        &:last-child
          border-right: 4px solid transparent
          &::after
            border-top-right-radius: 6px
            border-bottom-right-radius: 6px
      .hover-hide
        display: inline-block
      .hover-show, .hover-show-flex
        display: none
      &:hover
        td.v-data-table__td::after
          background-color: rgba(var(--v-border-color), calc(var(--v-hover-opacity) * 2)) !important
        .hover-show
          display: inline-block
        .hover-show-flex
          display: inline-flex
        .hover-hide
          display: none

      &:nth-child(odd)
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
