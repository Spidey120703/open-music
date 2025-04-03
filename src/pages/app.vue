<script setup lang="ts">

import AppNavigation from "@/components/app/AppNavigation.vue";
import AppTopPlayer from "@/components/app/AppTopPlayer.vue";

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.fullPath === '/app') {
    router.replace('/app/home')
  }
})

</script>

<template>
  <AppNavigation />
  <AppTopPlayer />
  <router-view />
</template>

<style scoped lang="sass">

</style>
