<script setup lang="ts">

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import FileSystem from "@/components/cloud/file-system.vue";

</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <FileSystem />
  </DndProvider>
</template>

<style scoped lang="sass">
</style>
