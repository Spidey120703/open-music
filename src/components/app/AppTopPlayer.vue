<script setup lang="ts">

const router = useRouter()

</script>

<template>
  <div class="app-top-player sticky top-0 left-0 right-0 h-64px grid grid-cols-3 gap-4px pa-4px z-100000">
    <div class="pa-7px flex justify-center gap-4px">
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-shuffle" size="20" color="#ff6900" />
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-skip-previous" size="26" color="#ff6900" />
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-play" size="32" color="#ff6900" />
<!--        <v-icon icon="" size="32" color="#ff6900" />-->
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-skip-next" size="26" color="#ff6900" />
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
<!--        <v-icon icon="mdi-repeat" size="20" color="#ff6900" />-->
        <v-icon icon="mdi-repeat-once" size="20" color="#ff6900" />
      </v-btn>
    </div>

    <div class="app-player-main rd-4px flex">
      <div
        class="w-54px h-54px ma-1px rd-4px cursor-pointer overflow-hidden relative"
        @click="router.push('/player')"
      >
        <v-img
          src="@/assets/album-cover.jpg"
          width="54"
          height="54"
          inline
          class="absolute inset-0"
        />
        <div class="opacity-0 hover:opacity-100! transition-opacity bg-transparent backdrop-blur-sm absolute inset-0 rd-4px flex justify-center items-center">
          <v-icon
            icon="mdi-fullscreen"
            :size="36"
            color="#ff6900"
            style="text-shadow: 0 0 8px white"
          />
        </div>
      </div>
      <div class="flex-1 text-12px text-center w-0px relative">
        <v-btn
          variant="flat"
          class="pa-4px! m-2px min-w-unset! h-fit! float-right bg-transparent"
        >
          <v-icon icon="mdi-star-outline" size="12" />
        </v-btn>
        <div class="px-48px h-18px mt-6px flex justify-center">
          <div class="w-fit h-fit relative auto-marquee">
            <span class="truncate">Gone, Gone, Gone</span>
            <AutoMarquee animate-on-overflow-only>Gone, Gone, Gone</AutoMarquee>
            <div class="absolute left-100% top-0 bottom-0">
              <v-btn
                variant="flat"
                class="absolute h-18px! px-10px! min-w-unset! float-right bg-transparent"
              >
                <v-icon icon="mdi-dots-horizontal" size="14" color="#ff6900" />
              </v-btn>
            </div>
          </div>
        </div>
        <div class="px-48px h-18px opacity-65 auto-marquee">
          <span class="truncate">Phillip Phillips - The World From the Side of the Moon (Deluxe Version)</span>
          <AutoMarquee>Phillip Phillips - The World From the Side of the Moon (Deluxe Version)</AutoMarquee>
        </div>
        <div class="absolute left-0 right-0 bottom-4px px-6px flex justify-space-between time"><div>00:00</div><div>00:00</div></div>
        <v-slider
          color="#ff6900"
          class="absolute left-0 right-0 bottom-0 ml--1px! mr-1px!"
          :track-size="3"
          :thumb-size="4"
        />
      </div>
    </div>

    <div class="pa-7px flex justify-center gap-4px">
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
<!--        <v-icon icon="volume-variant-off" size="22" color="#ff6900" />-->
<!--        <v-icon icon="mdi-volume-low" size="22" color="#ff6900" />-->
<!--        <v-icon icon="mdi-volume-medium" size="22" color="#ff6900" />-->
        <v-icon icon="mdi-volume-high" size="22" color="#ff6900" />
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-comment-quote-outline" size="22" color="#ff6900" />
      </v-btn>
      <v-btn
        variant="flat"
        class="px-0px! w-42px! h-42px! min-w-unset! float-right bg-transparent"
      >
        <v-icon icon="mdi-format-list-bulleted" size="22" color="#ff6900" />
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="sass">

.app-top-player
  background: rgba(255, 255, 255, 0.64)
  backdrop-filter: saturate(50%) blur(24px)
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.12)
  //border-bottom: thin solid rgba(0, 0, 0, 0.12)
  .app-player-main
    background: rgba(255, 255, 255, 0.36)
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.12)
    .time
      opacity: 0
      transition: opacity .2s
    .v-slider
      :deep(.v-slider-thumb)
        opacity: 0
        transition: opacity .2s
    .auto-marquee
      .truncate
        display: block
        width: inherit
      .vue3-marquee
        display: none !important
    &:hover
      .time
        opacity: 1
      .v-slider
        :deep(.v-slider-thumb)
          opacity: 1
      .auto-marquee
        .truncate
          display: none !important
        .vue3-marquee
          display: flex !important

.v-slider
  :deep(.v-slider-track__fill)
    height: var(--v-slider-track-size) !important
  :deep(.v-input__control)
    min-height: unset !important
  :deep(.v-input__details)
    display: none

</style>
