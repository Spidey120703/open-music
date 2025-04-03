<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.svg"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">欢迎来到</div>
        <div class="text-body-2 font-weight-light mb-n1 text-.7em!">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">OpenMusic</h1>
      </div>

      <div class="h-30vh flex items-center justify-center">
        <v-progress-circular color="#ff6900" indeterminate />
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
