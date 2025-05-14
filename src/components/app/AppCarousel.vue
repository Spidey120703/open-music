<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import {useDynamicColumns} from "@/composables/layout";


const props = withDefaults(defineProps<{
  totalSize?: number
  gap?: number
  minCardWidth?: number
  labelTop?: number
  labelBottom?: number
  rows?: number
  rowGap?: number
}>(), {
  totalSize: 0,
  gap: 8,
  minCardWidth: 300,
  labelTop: 0,
  labelBottom: 0,
  rows: 1,
  rowGap: 36
})

const swiperRef = ref();

const { columns } = useDynamicColumns({
  containerRef: swiperRef,
  gap: props.gap,
  minWidth: props.minCardWidth
})

const prev = () => {
  $swiper.value.slideTo($swiper.value.activeIndex - columns.value)
}

const next = () => {
  $swiper.value.slideTo($swiper.value.activeIndex + columns.value)
}
const $swiper = ref()
const onSwiper = (swiper: unknown) => {
  $swiper.value = swiper
  $swiper.value.activeIndex = 0
  // console.log()
}

</script>

<template>
  <div class="w-100% flex">
    <div
      class="w-42px flex justify-center items-center"
      :style="{
        paddingTop: `${labelTop}px`,
        paddingBottom: `${labelBottom}px`,
      }"
    >
      <v-btn
        v-if="! $swiper?.isBeginning"
        variant="flat"
        class="min-w-unset! p-0! h-48px! bg-transparent"
        @click="prev"
      >
        <v-icon icon="mdi-chevron-left" size="42" color="#333333" class="w-24px! min-w-unset!" />
      </v-btn>
    </div>

    <swiper
      ref="swiperRef"
      class="flex-1"
      :space-between="gap"
      :slides-per-view="columns"
      auto-height
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="index in Math.ceil(totalSize / rows)"
        :key="`swiper-slide-${index}`"
      >
        <div
          v-for="col in rows"
          :key="`item-${index * rows + col}`"
          :style="{ marginBottom: col < rows ? `${rowGap}px` : '0' }"
        >
          <slot :index="index * rows + col - 1" />
        </div>
      </swiper-slide>
    </swiper>

    <div
      class="w-42px flex justify-center items-center"
      :style="{
        paddingTop: `${labelTop}px`,
        paddingBottom: `${labelBottom}px`,
      }"
    >
      <v-btn
        v-if="! $swiper?.isEnd"
        variant="flat"
        class="min-w-unset! p-0! h-48px! bg-transparent"
        @click="next"
      >
        <v-icon icon="mdi-chevron-right" size="42" color="#333333" class="w-24px! min-w-unset!" />
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
