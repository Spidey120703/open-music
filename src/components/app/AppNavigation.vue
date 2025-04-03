<script setup lang="ts">

const route = useRoute()
const router = useRouter()

const rail = ref<boolean>(false)

const selected = ref<string[]>([route.fullPath.replace(/^\/app\//, '') || 'home'])
const opened = ref<string[]>(['library', 'playlist'])

watch(route, (val) => {
  selected.value[0] = val.fullPath.replace(/^\/app\//, '')
})

watch(selected, (val) => {
  if (val.length) {
    router.push('/app/' + val[0])
  }
})

let openedBackup: string[] = ['library', 'playlist']

const expandOnHover = ref<boolean>(false)

watch(rail, (val) => {
  if (val) {
    openedBackup = opened.value
    opened.value = []
  } else {
    opened.value = openedBackup
    expandOnHover.value = false
  }
})

// 实现子条目选中时，如果左菜单收缩，父条目还能高亮
const parent = computed(() => selected.value[0].slice(0, selected.value[0].indexOf('/')))

const searchRef = ref()
const focusSearch = () => {
  rail.value = false
  const search = searchRef.value.$el?.querySelector('input') as HTMLInputElement
  setTimeout(() => {
    search.focus()
  })
}

const isHovering = ref<boolean>(false)

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseOut = () => {
  expandOnHover.value = rail.value
  isHovering.value = false
}

const fakeExpanding = ref<boolean>(false)

watch(isHovering, (val) => {
  fakeExpanding.value = expandOnHover.value && val
  if (expandOnHover.value) {
    if (val) {
      opened.value = openedBackup
    } else {
      if (opened.value.length) {
        openedBackup = opened.value
      }
      opened.value = []
    }
  }
})

</script>

<template>
  <v-navigation-drawer
    class="navigation-drawer z-100001!"
    :rail="rail"
    :width="300"
    :rail-width="44"
    permanent
    :expand-on-hover="expandOnHover"
    @mouseenter.self="handleMouseEnter"
    @mouseleave.self="handleMouseOut"
  >
    <div class="flex flex-col h-100%!">
      <v-list
        density="compact"
        nav
        class="top-menu"
        color="#ff6900"
      >
        <v-list-item class="min-h-unset! overflow-visible!">
          <div class="flex justify-between pl-6px pr-4px">
            <div class="flex items-center w-fit">
              <v-img
                width="1.5em"
                height="1.5em"
                src="@/assets/logo.svg"
                inline
              />
              <span class="ml-.65em font-weight-bold">OpenMusic</span>
            </div>
            <v-btn variant="flat" class="px-12px! min-w-unset! mr--4px">
              <v-icon icon="mdi-dots-horizontal" />
            </v-btn>
          </div>
        </v-list-item>
        <v-list-item>
          <v-btn variant="flat" class="px-10px! min-w-unset! mr--4px" @click="rail = ! rail">
            <v-icon icon="mdi-menu" />
          </v-btn>
        </v-list-item>
        <v-list-item>
          <div v-show="fakeExpanding || ! rail" class="px-8px">
            <v-text-field
              ref="searchRef"
              density="compact"
              label="搜索"
              hide-details
              single-line
              rounded="md"
              color="#ff6900"
              placeholder="搜索"
              @click="expandOnHover = rail = false"
              @keydown="expandOnHover = rail = false"
            >
              <template #append-inner>
                <v-btn
                  size="sm"
                  flat
                  type="plain"
                  color="transparent"
                >
                  <v-icon icon="mdi-magnify" class="before:text-22px!" />
                </v-btn>
              </template>
            </v-text-field>
          </div>
          <v-btn
            v-show="! fakeExpanding && rail"
            variant="flat"
            class="px-8px! min-w-unset! mr--4px w-100%! h-30px! justify-end"
            @click.stop="focusSearch"
          >
            <v-icon icon="mdi-magnify" class="before:text-22px!" />
          </v-btn>
        </v-list-item>
      </v-list>

      <v-list
        v-model:selected="selected"
        v-model:opened="opened"
        density="compact"
        nav
        slim
        mandatory
        class="app-menu flex-1 overflow-y-auto overflow-x-hidden"
        color="#ff6900"
        open-strategy="multiple"
        active-strategy="independent"
      >
        <v-list-item prepend-icon="mdi-home-outline" title="主页" value="home" />
        <v-list-item prepend-icon="mdi-view-grid-outline" title="新发现" value="discovery" />
        <v-list-item prepend-icon="mdi-cloud-outline" title="云空间" value="cloud" />
        <v-list-group value="library" :class="{ active: parent === 'library' }">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-document"
              title="资料库"
              value="library"
              @click.stop="! expandOnHover && (rail = false)"
            />
          </template>
          <v-list-item prepend-icon="mdi-clock-outline" title="最近添加" value="library/recently-added" />
          <v-list-item prepend-icon="mdi-microphone" title="艺人" value="library/artists" />
          <v-list-item prepend-icon="mdi-album" title="专辑" value="library/albums" />
          <v-list-item prepend-icon="mdi-music-note" title="歌曲" value="library/songs" />
        </v-list-group>
        <v-list-group value="playlist" :class="{ active: parent === 'playlist' }">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-playlist-music"
              title="播放列表"
              value="playlist"
              @click.stop="! expandOnHover && (rail = false)"
            >
              <template #append="{ isOpen }">
                <v-btn
                  variant="flat"
                  class="px-0px! min-w-unset! w-24px h-24px! mr-6px highlight-btn"
                  @click.stop
                >
                  <v-icon icon="mdi-plus" />
                </v-btn>
                <v-icon :icon="isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
              </template>
            </v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-apps" title="所有播放列表" value="playlist/all" />
          <v-list-item prepend-icon="mdi-star-box-outline" title="喜爱的歌曲" value="playlist/favorite" />
        </v-list-group>
      </v-list>

      <v-list
        density="compact"
        nav
        class="top-menu"
        color="#ff6900"
      >
        <v-list-item>
          <v-btn
            variant="flat"
            class="text-none px-0px! min-w-unset! mr--4px w-100%! h-36px! justify-start"
          >
            <v-avatar
              icon="$vuetify"
              image="@/assets/avatar.jpg"
              :size="16"
              border
              class="mx-10px"
            />
            <span class="ml-2px font-weight-regular text-14px">Spidey</span>
          </v-btn>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="sass">

.navigation-drawer
  background: #f0f0f099
  backdrop-filter: blur(36px)
  .v-btn
    background: transparent !important

:deep(.v-list-item__content)
  overflow: unset

.v-list
  padding: 4px
  .v-list-item
    min-height: unset !important

.v-list
  &.top-menu
    .v-list-item
      padding: 0 !important

  &.app-menu
    &::-webkit-scrollbar
      display: none
      width: 0 !important
      height: 0 !important
    .v-list-item
      padding: 6px 6px !important
      :deep(.v-list-item__prepend)
        width: 34px
        .v-icon::before
          font-size: 22px !important
      .highlight-btn
        &:hover
          :deep(.v-btn__overlay)
            opacity: .12
    .v-list-group__items .v-list-item
      padding-inline-start: 40px !important
    &:deep(.v-list-item--active).v-list-group__header
      color: black !important
      .v-icon::before
        color: #7a7a7a !important

.v-navigation-drawer.v-navigation-drawer--rail
  .v-list.app-menu
    .v-list-group.active
      .v-list-group__header
        color: rgb(255, 105, 0) !important
        :deep(.v-list-item__overlay)
          opacity: .12
        :deep(.v-list-item__prepend)
          .v-icon
            opacity: 1 !important

.v-navigation-drawer.v-navigation-drawer--expand-on-hover.v-navigation-drawer--is-hovering
  .v-list.app-menu
    .v-list-group.active
      .v-list-group__header
        color: inherit !important
        :deep(.v-list-item__overlay)
          opacity: 0
        :deep(.v-list-item__prepend)
          .v-icon
            opacity: 1 !important

:deep(.v-field)
  overflow: hidden
  padding: 0 5px
  .v-label, .v-field__input
    padding: 6px 4px
    font-size: 12px
  .v-label
    margin: 0
  .v-field__input
    min-height: auto
  .v-field--appended
    padding: 0
</style>
