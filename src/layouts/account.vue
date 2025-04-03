<template>
  <v-app-bar flat>
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="1000"
    >
      <div class="flex items-center w-fit">
        <v-img
          width="1.5em"
          height="1.5em"
          src="@/assets/logo.svg"
          inline
        />
        <span class="ml-.25em font-weight-bold">OpenMusic</span>
      </div>
    </v-responsive>
  </v-app-bar>

  <v-main>
    <v-container>
      <v-responsive
        class="align-center fill-height mx-auto"
        max-width="1000"
      >
        <router-view />
      </v-responsive>
    </v-container>
  </v-main>

  <AppFooter />
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
