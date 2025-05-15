<script setup lang="ts">

import {useMessageStore} from "@/stores/message";
import {storeToRefs} from "pinia";

const { messages } = storeToRefs(useMessageStore());

</script>

<template>
  <v-snackbar-queue
    v-model="messages"
  />
</template>

<style scoped lang="sass">

</style>
