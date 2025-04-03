<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2023-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">OpenMusic</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://github.com/Spidey120703/open-music"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  const items = [
    {
      title: 'OpenMusic',
      icon: ['M16.8672 16.0896C16.92 15.852 16.92 15.6456 16.9248 15.408V6.612C16.9248 6.288 16.74 6.096 16.4184 6.12 16.3728 6.12 15.9408 6.1968 15.888 6.204L9.9048 7.3248C9.744 7.356 9.6192 7.4016 9.528 7.4784 9.4128 7.5696 9.3528 7.692 9.3288 7.8384 9.3216 7.8696 9.3144 7.932 9.3144 8.0232V14.952C9.3144 15.1128 9.3 15.276 9.1848 15.4056 9.0624 15.5424 8.916 15.5808 8.748 15.612 8.6184 15.636 8.4864 15.6576 8.3568 15.6816 7.8648 15.7752 7.5432 15.8352 7.2504 15.9432 6.9744 16.0416 6.7656 16.1736 6.5976 16.3344 6.2664 16.656 6.1368 17.0856 6.1824 17.4936 6.228 17.8392 6.3888 18.1704 6.6816 18.4152 6.8808 18.5832 7.128 18.708 7.4112 18.7608 7.704 18.816 8.0256 18.792 8.4864 18.708 8.7312 18.6624 8.9616 18.5928 9.1848 18.4704 9.4056 18.3552 9.5904 18.1944 9.7368 18.0024S9.9768 17.5944 10.0296 17.364C10.0848 17.1264 10.0992 16.9176 10.0992 16.68V10.6584C10.0992 10.3368 10.1928 10.2528 10.476 10.1904 10.476 10.1904 15.4464 9.2616 15.6768 9.2232 15.9984 9.1704 16.152 9.2544 16.152 9.5688V13.6776C16.152 13.8384 16.152 13.9992 16.0296 14.1384 15.9072 14.2752 15.7608 14.3136 15.5928 14.3448 15.4632 14.3688 15.3312 14.3904 15.2016 14.4144 14.7096 14.508 14.388 14.568 14.0952 14.676 13.8192 14.7744 13.6104 14.9064 13.4424 15.0672 13.1136 15.3888 12.9672 15.8184 13.0128 16.2264 13.0512 16.572 13.2264 16.9032 13.5192 17.148 13.7184 17.3088 13.9656 17.4336 14.2488 17.4864 14.5416 17.5416 14.8632 17.5176 15.324 17.4336 15.5688 17.388 15.7992 17.3184 16.0224 17.196 16.2432 17.0808 16.428 16.92 16.5744 16.728S16.8144 16.32 16.8672 16.0896ZM18.432 1.5336C20.9688 1.5336 23.0424 3.6072 23.04 6.144V18.432C23.04 20.9664 20.9664 23.04 18.432 23.04H6.144C3.6096 23.04 1.536 20.9664 1.536 18.432V6.1416C1.536 3.6072 3.6096 1.5336 6.144 1.5336H18.432Z'],
      href: '#',
    },
    {
      title: 'OpenMusic GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/Spidey120703/open-music',
    },
    {
      title: 'OpenMusic WeChat',
      icon: `mdi-wechat`,
      href: 'https://weixin.qq.com/',
    },
    {
      title: 'OpenMusic QQ',
      icon: `mdi-qqchat`,
      href: 'https://im.qq.com/index/',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: #ff6900

  .social-link:first-child :deep(.v-icon):hover
      scale: 1.2
</style>
