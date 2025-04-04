<script setup lang="ts">

const router = useRouter()

import AlbumCard from "@/components/music/AlbumCard.vue";
import {useDynamicColumns} from "@/composables/layout";

withDefaults(defineProps<{
  count?: number
}>(), {
  count: 10
})

const containerRef = ref()
const { columns } = useDynamicColumns({
  minWidth: 200,
  gap: 16,
  containerRef
})

</script>

<template>
  <div
    ref="containerRef"
    class="pa-36px grid gap-16px w-100%"
    :style="`grid-template-columns: repeat(${columns}, minmax(200px, 1fr))`"
  >
<!--    style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"-->
    <AlbumCard
      v-for="i in count"
      :key="`p-${i}`"
      cover-img="/src/assets/album-cover.jpg"
      title="The World From the Side of the Moon (Deluxe Version)"
      subtitle="Phillip Phillips"
      :size="200"
      @show-detail="router.push('./album/1')"
      @show-sub-info="router.push('./artist/1')"
    />
  </div>
</template>

<style scoped lang="sass">

</style>
