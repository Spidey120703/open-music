<script setup lang="ts">

</script>

<template>
  <div>
    <div class="text-h4 font-weight-bold mb-84px mt-36px">重设密码</div>

    <div class="flex">
      <div class="flex-1 pr-36px">
        <div class="w-400px">
          <div>
            <div class="text-17px mb-16px">输入账户使用的电子邮件地址或电话号码以继续。</div>
            <v-text-field
              ref="accountRef"
              label="账号"
              variant="outlined"
              color="#ff6900"
              class="mb-14px"
            />
            <v-text-field
              ref="accountRef"
              label="密码"
              variant="outlined"
              color="#ff6900"
              class="mb-14px"
            />
          </div>
          <div>
            <v-btn
              flat
              color="#ff6900"
              class="mt-36px"
            >
              修改
            </v-btn>
          </div>
        </div>
      </div>

      <v-divider vertical />

      <div class="px-36px flex">
        <v-icon icon="mdi-account-supervisor-circle" color="#888888" class="text-72px!" />
        <div class="color-[#6e6e73] text-size-14px pl-20px w-225px">你可以在此处重设忘记的密码。出于安全考虑，请不要设置常用密码。</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

:deep(.v-field--variant-outlined)
  border-radius: 12px

:deep(.v-input__details)
  display: none

.v-btn
  width: 126px
  border-radius: 8px
  padding: 7px 15px
  font-size: 17px

</style>
