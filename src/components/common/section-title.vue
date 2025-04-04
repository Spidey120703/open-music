<script setup lang="ts">

withDefaults(defineProps<{
  title: string
  size?: number
  hasMore?: boolean
}>(), {
  size: 20,
  hasMore: false
})

const emit = defineEmits(['more'])

</script>

<template>
  <div class="flex justify-space-between items-center">
    <div class="flex-1 flex items-center">
      <div
        class="font-weight-bold cursor-pointer select-none"
        :style="{ fontSize: `${size}px` }"
        @click="emit('more')"
      >
        {{ title }}
      </div>
      <v-icon
        v-show="hasMore"
        icon="mdi-chevron-right"
        :size="size + 8"
        class="opacity-60"
        @click="emit('more')"
      />
    </div>
    <div class="flex items-center gap-4px">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
