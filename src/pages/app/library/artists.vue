<script setup lang="ts">

const router = useRouter()

const { setTitle } = inject<any>('navbar')
setTitle('艺人')

</script>

<template>
  <div class="flex h-[calc(100vh-156px)] overflow-y-auto">
    <v-list
      nav
      slim
      mandatory
      density="compact"
      open-strategy="multiple"
      active-strategy="independent"
      width="240px"
      class="p-4px! overflow-y-auto overflow-x-hidden"
      color="#ff6900"
    >
      <v-list-item
        v-for="i in 20"
        :key="`item-${i}`"
        :value="`item-${i}`"
        class="pa-8px!"
      >
        <div class="flex items-center">
          <v-avatar image="/src/assets/artist-avatar.jpg" />
          <div class="ml-8px">Coldplay</div>
        </div>
      </v-list-item>
    </v-list>
    <div class="flex-1 pa-36px overflow-y-auto overflow-x-hidden">
      <div class="top-title">
        <SectionTitle title="Coldplay" has-more @more="router.push('./artist/1')">
          <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
            <v-icon icon="mdi-play" size="16" />
          </v-btn>
          <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
            <v-icon icon="mdi-shuffle" size="16" />
          </v-btn>
          <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
            <v-icon icon="mdi-star-outline" size="16" />
          </v-btn>
          <v-btn variant="text" color="#ff6900" class="px-10px! py-4px! min-w-unset! h-fit!">
            <v-icon icon="mdi-dots-horizontal" size="16" />
          </v-btn>
        </SectionTitle>
        <v-divider class="my-6px" />
        <div class="opacity-50 text-12px font-weight-bold">12 张专辑，34 首歌曲</div>
      </div>
      <div>
        <AlbumPreviewCard
          v-for="i in 8"
          :key="`c-${i}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
::-webkit-scrollbar
  width: 4px
  background-color: transparent

::-webkit-scrollbar-thumb
  background-color: rgb(0,0,0,.12)
  border-radius: 3px

::-webkit-scrollbar-track
  background: transparent

.v-list
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12)

</style>

<route lang="yaml">
meta:
  layout: with-navbar
</route>
