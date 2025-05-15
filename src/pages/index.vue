<template>
  <AppWelcome />
</template>

<script lang="ts" setup>

import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('sign-in')
  }, 1500)
});

</script>
