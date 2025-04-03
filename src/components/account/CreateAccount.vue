<script setup lang="ts">

const router = useRouter()

const accountForm = reactive({
  username: '',
  nickname: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: ''
})

const available = computed(() => ({
  password: accountForm.password.length > 0,
  confirmPassword: accountForm.confirmPassword.length > 0,
}))

const show = reactive({
  password: false,
  confirmPassword: false
})
</script>

<template>
  <div>
    <div class="w-500px mx-auto">
      <div class="text-center">
        <div class="text-32px font-weight-bold mt-36px mb-16px">创建你的 OpenMusic 账户</div>
        <div class="text-17px font-weight-medium">
          只需一个 OpenMusic 账户，即可访问 OpenMusic 所有内容。
          <br>
          已有 OpenMusic 账户？
          <a
            class="text-17px!"
            href="javascript:void(0)"
            @click.prevent="router.push('/account/sign-in')"
            @keyup.enter="router.push('/account/sign-in')"
          >登录</a>
        </div>
      </div>

      <div class="mt-18px">
        <v-text-field
          ref="nicknameRef"
          v-model="accountForm.nickname"
          label="昵称"
          variant="outlined"
          color="#ff6900"
        />

        <v-divider class="mb-20px" />

        <v-text-field
          ref="accountRef"
          v-model="accountForm.username"
          label="账号"
          variant="outlined"
          color="#ff6900"
        />
        <v-text-field
          ref="passwordRef"
          v-model="accountForm.password"
          :type="show.password ? 'text' : 'password'"
          label="密码"
          variant="outlined"
          color="#ff6900"
        >
          <template #append-inner>
            <v-icon
              v-if="available.password"
              v-ripple="available.password"
              :icon="show.password ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              color="inherit"
              class="rd-full mr-4px"
              @click="show.password = !show.password"
            />
          </template>
        </v-text-field>
        <v-text-field
          ref="confirmPasswordRef"
          v-model="accountForm.confirmPassword"
          :type="show.confirmPassword ? 'text' : 'password'"
          label="确认密码"
          variant="outlined"
          color="#ff6900"
        >
          <template #append-inner>
            <v-icon
              v-if="available.confirmPassword"
              v-ripple="available.confirmPassword"
              :icon="show.confirmPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              color="inherit"
              class="rd-full mr-4px"
              @click="show.confirmPassword = !show.confirmPassword"
            />
          </template>
        </v-text-field>

        <v-divider class="mb-20px" />

        <v-text-field
          ref="emailRef"
          v-model="accountForm.email"
          label="name@example.com"
          variant="outlined"
          color="#ff6900"
        />
        <v-text-field
          ref="phoneRef"
          v-model="accountForm.phone"
          label="电话号码"
          variant="outlined"
          color="#ff6900"
        />
      </div>

      <v-divider class="mb-20px" />

      <v-btn
        flat
        color="#ff6900"
        class="mt-26px w-100% mb-48px"
      >
        注册
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="sass">

:deep(.v-field--variant-outlined)
  border-radius: 12px

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

.v-btn
  height: fit-content
  border-radius: 8px
  padding: 11px 21px
  font-size: 17px
</style>

