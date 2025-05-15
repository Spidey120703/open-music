<script setup lang="ts">

import md5 from 'crypto-js/md5'
import {signIn} from "@/api/auth";
import type {ApiError, ApiResponse} from "@/types";
import {useAuthorizationStore} from "@/stores/authorization";
import {useUserInfoStore} from "@/stores/user-info";
import {useMessageStore} from "@/stores/message";

const router = useRouter()

withDefaults(defineProps<{
  singleton?: boolean
}>(), {
  singleton: true
})

const signInForm = reactive({
  username: '',
  password: ''
})

enum SignInState {
  AccountInput,
  PasswordInput
}
const state = ref<SignInState>(SignInState.AccountInput)

const accountRef = ref()
const passwordRef = ref()

const changeState = (_state: SignInState) => {
  state.value = _state
  setTimeout(() => {
    if (_state === SignInState.AccountInput) {
      accountRef.value?.$el?.querySelector('input')?.focus?.()
    } else if (_state === SignInState.PasswordInput) {
      passwordRef.value?.$el?.querySelector('input')?.focus?.()
    }
  }, 0)
}

const handleAccountInputChange = () => {
  if (state.value === SignInState.PasswordInput) {
    changeState(SignInState.AccountInput)
    signInForm.password = ''
  }
}

const showPassword = ref(false)
const accountAvailable = computed(() => signInForm.username.length > 0)
const passwordAvailable = computed(() => signInForm.password.length > 0)


const testSignIn = () => {

  setTimeout(() => {
    accountRef.value?.$el?.querySelector('input')?.blur?.()
    passwordRef.value?.$el?.querySelector('input')?.blur?.()
  }, 0)

  if (state.value === SignInState.PasswordInput) {
    signIn({
      username: signInForm.username,
      password: md5(signInForm.password).toString(),
    })
      .then((res: ApiResponse<string>) => {
        useMessageStore().success('登录成功')
        useAuthorizationStore().setToken(res.data.data)
        useUserInfoStore().refreshUserInfo()
        router.push('/app/home')
      })
      .catch(() => {})
  }
}

</script>

<template>
  <div>
    <div v-if="singleton" class="text-h4 font-weight-bold mb-84px mt-36px">现在登录，发现更多精彩。</div>

    <div class="w-400px mx-auto">
      <div v-if="singleton" class="text-center">
        <h1 class="text-24px font-weight-bold color-[#494949]">登录 OpenMusic</h1>
      </div>
      <div v-else class="text-center">
        <div class="flex justify-center items-center">
          <div
            v-ripple="{ class: 'text-[#ff6900]!' }"
            class="w-200px! h-200px! pa-25px rd-full logo"
          >
            <v-img
              width="150"
              height="150"
              src="@/assets/logo.svg"
              inline
            />
          </div>
        </div>
        <div class="text-24px font-weight-bold color-[#494949]">OpenMusic 账户</div>
        <div class="text-15px font-weight-medium color-[#494949]">登录你的 OpenMusic 账户</div>
      </div>

      <div class="mt-42px h-180px">
        <v-text-field
          ref="accountRef"
          v-model="signInForm.username"
          label="账号"
          variant="outlined"
          color="#ff6900"
          class="account-input"
          :class="{ 'password-state': state === SignInState.PasswordInput }"
          @update:model-value="handleAccountInputChange"
          @keydown.enter="accountAvailable && changeState(SignInState.PasswordInput)"
        >
          <template #append-inner>
            <v-icon
              v-if="state === SignInState.AccountInput"
              v-ripple="accountAvailable"
              icon="mdi-arrow-right-thin-circle-outline"
              class="rd-full"
              :class="{ 'cursor-pointer': accountAvailable }"
              :color="accountAvailable ? 'inherit' : 'grey-lighten-1'"
              @click="accountAvailable && changeState(SignInState.PasswordInput)"
              @keydown.enter="accountAvailable && changeState(SignInState.PasswordInput)"
            />
          </template>
        </v-text-field>
        <v-text-field
          v-show="state === SignInState.PasswordInput"
          ref="passwordRef"
          v-model="signInForm.password"
          :type="showPassword ? 'text' : 'password'"
          label="密码"
          variant="outlined"
          color="#ff6900"
          class="password-input"
          @keydown.enter="passwordAvailable && testSignIn()"
        >
          <template #append-inner>
            <v-icon
              v-if="passwordAvailable"
              v-ripple="passwordAvailable"
              :icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              color="inherit"
              class="rd-full mr-4px"
              @click="showPassword = !showPassword"
            />
            <v-icon
              v-ripple="passwordAvailable"
              icon="mdi-arrow-right-thin-circle-outline"
              class="rd-full"
              :class="{ 'cursor-pointer': passwordAvailable }"
              :color="passwordAvailable ? 'inherit' : 'grey-lighten-1'"
              @click="passwordAvailable && testSignIn()"
              @keydown.enter="passwordAvailable && testSignIn()"
            />
          </template>
        </v-text-field>
      </div>

      <div class="flex flex-col justify-center items-center">
        <v-checkbox label="记住我的账户" class="w-fit-content" color="#ff6900" />
        <div>
          <a
            href="javascript:void(0)"
            @click.prevent="router.push('/account/password')"
            @keyup.enter="router.push('/account/password')"
          >忘记了密码？</a>
        </div>
        <div class="text-14px">
          没有 OpenMusic 账户？
          <a
            href="javascript:void(0)"
            @click.prevent="router.push('/account')"
            @keyup.enter="router.push('/account')"
          >
            立即创建你的 OpenMusic 账户
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.account-input :deep(.v-field--variant-outlined)
  border-radius: 12px

.account-input.password-state :deep(.v-field--variant-outlined)
  border-radius: 12px 12px 0 0

.account-input:has( .v-field--variant-outlined.v-field--active.v-field--focused)+.password-input :deep(.v-field--variant-outlined)
  .v-field__outline
    .v-field__outline__start, .v-field__outline__end, .v-field__outline__notch::before
      border-top-color: transparent

.password-input :deep(.v-field--variant-outlined)
  border-radius: 0 0 12px 12px
  margin-top: -23px
  .v-field__outline
    .v-field__outline__notch
      background: inherit

.password-input :deep(.v-field--variant-outlined.v-field--active)
  .v-field__outline
    .v-field__outline__notch
      border-top-color: transparent
      margin-top: -1px
      background-image: linear-gradient(white, white)
      background-size: auto 3px
      background-repeat: no-repeat
      &:before
        margin-top: 1px

a
  font-size: 14px
  color: #ff6900
  text-decoration: none
  &:hover
    text-decoration: underline
  &:after
    content: "\F005C"
    font-family: "Material Design Icons", serif
    text-decoration: none !important


.logo
  position: relative
  cursor: pointer
  &::before
    content: ''
    position: absolute
    inset: 0
    opacity: 0
    background: radial-gradient(#ff6900, transparent 70%)
    transition: all 500ms
  &:has( img:hover)::before
    opacity: 1
</style>

