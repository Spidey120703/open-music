<script setup lang="ts">

import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'


const emojiPickerShow = ref(false)

const textareaRef = ref()

const onSelectEmoji = (emoji: any) => {
  const textarea = (textareaRef.value.$el as HTMLDivElement).querySelector('textarea')
  if (! textarea) return;

  const { selectionStart, selectionEnd } = textarea;

  const content = postContent.value
  postContent.value =
    content.slice(0, selectionStart) +
    emoji.i +
    content.slice(selectionEnd)

  setTimeout(() => {
    const newPos = selectionStart + emoji.i.length
    textarea.focus()
    textarea.setSelectionRange(newPos, newPos)
  })
}

const postContent = ref<string>('')

withDefaults(defineProps<{
  variant?: "filled" | "underlined" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled"
  placeholder?: string
  rows?: string | number
  post?: boolean
}>(), {
  variant: 'underlined',
  placeholder: '有什么想和大家分享的？',
  rows: 3,
  post: true
})

</script>

<template>
  <div>
    <v-textarea
      ref="textareaRef"
      v-model="postContent"
      :variant="variant"
      :placeholder="placeholder"
      auto-grow
      no-resize
      :counter="500"
      :rows="rows"
      :max-rows="12"
      color="#ff6900"
    />
    <div class="pt-4px relative">
      <v-btn
        :variant="emojiPickerShow ? 'tonal' : 'flat'"
        class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent mr-8px"
        @click="emojiPickerShow = !emojiPickerShow"
      >
        <v-icon icon="mdi-emoticon-happy-outline" />
      </v-btn>
      <EmojiPicker
        v-show="emojiPickerShow"
        :native="true"
        :static-texts="{
          placeholder: '搜索表情',
          skinTone: '肤色'
        }"
        :group-names="{
          smileys_people: '笑脸与人物',
          animals_nature: '动物与自然',
          food_drink: '食物与饮品',
          activities: '活动',
          travel_places: '旅行与地点',
          objects: '物品',
          symbols: '符号',
          flags: '旗帜',
          recent: '最近使用'
        }"
        @select="onSelectEmoji"
        class="ma-0! absolute left-0 z-100"
      />
      <v-btn
        v-show="post"
        variant="flat"
        class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent mr-8px"
      >
        <v-icon icon="mdi-image-outline" />
      </v-btn>
      <v-btn
        v-show="post"
        variant="flat"
        class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent mr-8px"
      >
        <v-icon icon="mdi-music" />
      </v-btn>
      <v-btn
        v-show="post"
        variant="flat"
        class="px-0px! w-32px! h-32px! min-w-unset! bg-transparent mr-8px"
      >
        <v-icon icon="mdi-video-outline" />
      </v-btn>
      <v-btn
        variant="tonal"
        class="px-12px! w-fit! h-32px! min-w-unset! float-right"
        color="#ff6900"
        prepend-icon="mdi-send"
        :text="post ? '发布' : '回复'"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
.v-textarea
  :deep(.v-input__details)
    padding-top: 0 !important
    min-height: unset !important
</style>
