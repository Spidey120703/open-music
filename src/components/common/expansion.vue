<script setup lang="ts">

defineProps<{
  expanding: boolean
}>()

</script>

<template>
  <v-expansion-panels :model-value="expanding ? 'expanding' : ''" flat>
    <v-expansion-panel value="expanding">
      <v-expansion-panel-text>
        <slot />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="sass">

:deep(.v-expansion-panel-title)
  display: none

:deep(.v-expansion-panel-text__wrapper)
  padding: 0 !important

</style>
