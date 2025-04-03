<script setup lang="ts">

const showFilter = ref<boolean>(false)

const filterRef = ref()

const toggleFilterShown = () => {
  showFilter.value = ! showFilter.value
  setTimeout(() => {
    filterRef.value?.$el?.querySelector('input')?.focus()
  })
}

const title = ref<string>('')

const setTitle = (text: string) => {
  title.value = text
}

provide('navbar', {
  setTitle
})

</script>

<template>
  <div
    class="header-navbar h-52px sticky top-64px left-0 right-0 z-99999 flex items-center justify-center"
  >
    <span class="font-weight-bold">{{ title }}</span>
    <div class="flex items-center gap-8px absolute right-8px">
      <v-text-field
        v-if="showFilter"
        ref="filterRef"
        density="compact"
        hide-details
        single-line
        rounded="md"
        width="180px"
        color="#ff6900"
        placeholder="过滤"
      />
      <v-btn
        :variant="showFilter ? 'flat' : 'text'"
        :base-color="showFilter ? '#ff6900' : ''"
        class="px-12px! py-6px! min-w-unset! h-fit!"
        @click="toggleFilterShown"
      >
        <v-icon icon="mdi-magnify" size="20px" />
      </v-btn>
      <v-btn variant="flat" class="px-12px! py-6px! min-w-unset! h-fit!">
        <v-icon icon="mdi-filter-variant" size="20px" />
      </v-btn>
    </div>
  </div>
  <router-view />
</template>

<style scoped lang="sass">
.header-navbar
  background: rgba(255, 255, 255, 0.48)
  backdrop-filter: saturate(50%) blur(48px)
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.12)


:deep(.v-field)
  overflow: hidden
  padding: 0 5px
  .v-label, .v-field__input
    padding: 6px 4px
    font-size: 12.5px
  .v-label
    margin: 0
  .v-field__input
    min-height: auto
  .v-field--appended
    padding: 0

</style>
