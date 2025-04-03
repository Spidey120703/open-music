<script setup lang="ts">

const route = useRoute()
const router = useRouter()

</script>

<template>
  <div class="border-b flex justify-between items-center h-52px mt--16px">
    <div class="text-21px font-bold">OpenMusic 账户</div>
    <div class="text-12px">
      <a
        href="javascript:void(0)"
        :class="{ 'current': route.fullPath === '/account/sign-in' }"
        @click="router.push('/account/sign-in')"
      >登录</a>
      <a
        href="javascript:void(0)"
        :class="{ 'current': ['/account', '/account/index'].includes(route.fullPath) }"
        @click="router.push('/account')"
      >创建你的 OpenMusic 账户</a>
    </div>
  </div>
  <router-view />
</template>

<style scoped lang="sass">

a
  color: inherit
  margin-left: 24px
  text-decoration: none
  &.current
    opacity: 0.56
    cursor: default

  &:not(.current):hover
    color: #ff6900

</style>

<route lang="yaml">
meta:
  layout: account
</route>
