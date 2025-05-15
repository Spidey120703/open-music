<template>
  <v-app>
    <router-view />
    <AppSnackbar />
  </v-app>
</template>

<script lang="ts" setup>

import AppSnackbar from "@/components/app/AppSnackbar.vue";

</script>
