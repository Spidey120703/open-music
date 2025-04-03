<script setup lang="ts">

import {Vue3Marquee} from "vue3-marquee";

const overflow = ref(false)

</script>

<template>
  <vue3-marquee
    :class="{ overflow }"
    animate-on-overflow-only
    @on-overflow-detected="overflow = true"
    @on-overflow-cleared="overflow = false"
  >
    <slot />
  </vue3-marquee>
</template>

<style scoped lang="sass">

.vue3-marquee.overflow
  :deep(.marquee)
    padding-right: 4em

</style>
