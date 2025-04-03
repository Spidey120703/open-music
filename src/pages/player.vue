<script setup lang="ts">

const lyrics = reactive([
  'When life leaves you high and dry',
  'I\'ll be at your door tonight',
  'If you need help, if you need help',
  'I\'ll shut down the city lights',
  'I\'ll lie, cheat, I\'ll beg and bribe',
  'To make you well, to make you well',
  'When enemies are at your door',
  'I\'ll carry you away from war',
  'If you need help, if you need help',
  'Your hope dangling by a string',
  'I\'ll share in your suffering',
  'To make you well, to make you well',
  'Give me reasons to believe',
  'That you would do the same for me',
  'And I will do it for you, for you',
  'Baby, I\'m not moving on',
  'I\'ll love you long after you\'re gone',
  'For you, for you',
  'You will never sleep alone',
  'I\'ll love you long after you\'re gone',
  'And long after you\'re gone, gone, gone',
  'When you fall like a statue',
  'I\'m gon\' be there to catch you',
  'Put you on your feet, you on your feet',
  'And if your well is empty',
  'Not a thing will prevent',
  'Tell me what you need, what do you need',
  'I surrender honestly',
  'You\'ve always done the same for me',
  'So I will do it for you, for you',
  'Baby, I\'m not moving on',
  'I\'ll love you long after you\'re gone',
  'For you, for you',
  'You will never sleep alone',
  'I\'ll love you long after you\'re gone',
  'And long after you\'re gone, gone, gone',
])

</script>

<template>
  <div
    class="fixed inset-0 z-1"
    style="
        background-position: center;
        background-size: cover;
      "
    :style="{ backgroundImage: `url(/src/assets/album-cover.jpg)` }"
  />
  <div
    class="fixed inset-0 z-2"
    style="
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(48px);
      "
  />
  <div class="w-100vw h-100vh overflow-hidden flex c-light relative z-3">
    <div class="flex flex-col justify-center min-w-480px min-h-640px w-50vw px-12vw">
      <div class="rd-8px overflow-hidden w-100%">
        <v-img
          width="100%"
          aspect-ratio="square"
          src="@/assets/album-cover.jpg"
        />
      </div>
      <div class="pt-32px flex items-center">
        <div class="w-[calc(100%-88px)]">
          <div class="text-22px">
            <AutoMarquee>Gone, Gone, Gone</AutoMarquee>
          </div>
          <div class="text-18px opacity-60 text-center">
            <AutoMarquee>
              <span>Phillip Phillips<v-divider class="inline-block! w-1.5em h-1em opacity-100 my-.25em mx-.5em" />The World From the Side of the Moon (Deluxe Version)</span>
            </AutoMarquee>
          </div>
        </div>
        <div class="flex gap-12px pl-12px w-fit">
          <v-btn
            variant="tonal"
            class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent"
            rounded="circle"
          >
            <v-icon icon="mdi-star-outline" size="22" color="inherit" />
          </v-btn>
          <v-btn
            variant="tonal"
            class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent"
            rounded="circle"
          >
            <v-icon icon="mdi-dots-horizontal" size="26" color="inherit" />
          </v-btn>
        </div>
      </div>
      <div>
        <div class="hover-slider mb-12px">
          <v-slider
            color="white"
            :track-size="6"
            :thumb-size="8"
            class="mx-0! my-8px!"
          />
          <div class="text-12px flex justify-space-between">
            <div>00:00</div>
            <div>00:00</div>
          </div>
        </div>
        <div class="flex items-center">
          <v-btn
            variant="flat"
            class="px-0px! w-42px! h-32px! min-w-unset! bg-transparent"
          >
            <v-icon icon="mdi-shuffle" size="24" color="inherit" />
          </v-btn>
          <div class="flex-1 flex items-center justify-center gap-12px">
            <v-btn
              variant="flat"
              class="px-0px! w-42px! h-42px! min-w-unset! bg-transparent"
              rounded="circle"
            >
              <v-icon icon="mdi-skip-previous" size="32" color="inherit" />
            </v-btn>
            <v-btn
              variant="flat"
              class="px-0px! w-54px! h-54px! min-w-unset! bg-transparent"
              rounded="circle"
            >
              <v-icon icon="mdi-play" size="42" color="inherit" />
              <!--        <v-icon icon="" size="42" color="inherit" />-->
            </v-btn>
            <v-btn
              variant="flat"
              class="px-0px! w-42px! h-42px! min-w-unset! bg-transparent"
              rounded="circle"
            >
              <v-icon icon="mdi-skip-next" size="32" color="inherit" />
            </v-btn>
          </div>
          <v-btn
            variant="flat"
            class="px-0px! w-42px! h-32px! min-w-unset! bg-transparent"
          >
            <!--        <v-icon icon="mdi-repeat" size="20" color="inherit" />-->
            <v-icon icon="mdi-repeat-once" size="24" color="inherit" />
          </v-btn>
        </div>
        <div class="hover-slider mt-18px flex">
          <v-icon icon="mdi-volume-high" size="22" color="inherit" />
          <v-slider
            color="white"
            :track-size="6"
            :thumb-size="8"
            class="mx-12px! flex-1"
          />
          <v-icon icon="mdi-volume-high" size="22" color="inherit" />
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div class="pr-24px py-[calc(50vh-54px)]">
        <div
          v-for="(line, i) in lyrics"
          :key="`line-${i}`"
          v-ripple
          class="text-36px font-weight-bold inline-block py-6px px-16px rd-8px cursor-pointer mb-24px"
        >
          {{ line }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.v-slider
  :deep(.v-slider-track__fill)
    height: var(--v-slider-track-size) !important
  :deep(.v-input__control)
    min-height: unset !important
  :deep(.v-input__details)
    display: none
  :deep(.v-slider-thumb)
    opacity: 0
    transition: opacity .2s
.hover-slider:hover
  .v-slider
    :deep(.v-slider-thumb)
      opacity: 1

</style>

<route lang="yaml">
meta:
  layout: immersive
</route>
