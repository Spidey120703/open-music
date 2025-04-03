<script setup lang="ts">
import dayjs from 'dayjs'
import TextareaForm from "@/components/post/TextareaForm.vue";
import Expansion from "@/components/common/expansion.vue";


const postList = reactive(new Array(12).fill(null).map(_ => ({
  content: `
【最新音乐资讯】<br>
英国传奇乐队Coldplay正式宣布中国巡演计划！<br>
🗓️ 巡演时间：2024年4月20日-5月5日<br>
📍 巡演城市：北京 | 上海 | 广州 | 成都<br>
🌟 演出亮点：<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 全新360度悬浮舞台设计<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 经典曲目《Yellow》宇宙特别版<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 现场万人星空合唱环节<br>
🎫 票务信息：<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11月11日11:11 全网同步预售<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（具体开票平台待官方公布）<br>
📢 乐迷热议：<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"从学生时代等到现在，终于能看现场了！"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"求广州场团票！"
`,
  createdAt: '2025-03-15 12:00:00',
  user: {
    avatar: '/src/assets/avatar.jpg',
    nickname: 'Spidey',
  },
  state: {
    likeCount: 123,
    commentCount: 6,
    shareCount: 32,
  },
  commentExpanded: false
})))

const commentList = reactive(new Array(5).fill(null).map(_ => ({
  content: `牛哇！终于来中国了。<br>Coldplay！！！酷玩万岁！！！`,
  createdAt: '2025-03-16 13:10:23',
  user: {
    avatar: '/src/assets/avatar.jpg',
    nickname: 'Spidey',
  },
  state: {
    likeCount: 123,
  },
  commentExpanded: false
})))

</script>

<template>
  <div class="bg-#efefef">
    <div class="w-640px py-32px" style="margin: 0 calc(50vw - 320px) 0 auto">
      <v-card width="640" class="px-18px! overflow-visible! mb-18px z-10000!">
        <textarea-form class="pb-12px!" />
      </v-card>

      <v-card
        v-for="(post, index) in postList"
        :key="`post-${index}`"
        width="640" class="p-18px! overflow-visible! mb-18px"
        :style="{ zIndex: postList.length - index }"
      >
        <div class="flex">
          <div class="h-46px w-46px flex items-center justify-center">
            <v-avatar :image="post.user.avatar" />
          </div>
          <div class="flex-1 pl-18px">
            <div class="flex">
              <div class="flex-1">
                <div class="text-1.125em font-weight-bold">{{ post.user.nickname }}</div>
                <div class="text-.8em opacity-65">{{ dayjs(post.createdAt).format('YYYY年MM月DD日') }} · 发布了动态</div>
              </div>
              <v-btn
                variant="flat"
                class="px-0px! w-24px! h-32px! min-w-unset! bg-transparent opacity-65"
              >
                <v-icon icon="mdi-dots-vertical" />
              </v-btn>
            </div>
            <div class="pt-8px" v-html="post.content" />
          </div>
        </div>
        <div class="flex justify-space-around pt-10px">
          <v-btn
            variant="plain"
            class="px-0px! w-64px! h-24px! min-w-unset! opacity-65 hover:c-[#ff6900]! transition-colors"
          >
            <v-icon icon="mdi-share-outline" color="inherit" :size="22" />
            <text class="text-13px ml-3px">{{ post.state.shareCount }}</text>
          </v-btn>
          <v-btn
            variant="plain"
            class="px-0px! w-64px! h-24px! min-w-unset! opacity-65 hover:c-[#ff6900]! transition-colors"
            @click="post.commentExpanded = ! post.commentExpanded"
          >
            <v-icon icon="mdi-comment-outline" color="inherit" :size="16" />
            <text class="text-13px ml-3px">{{ post.state.commentCount }}</text>
          </v-btn>
          <v-btn
            variant="plain"
            class="px-0px! w-64px! h-24px! min-w-unset! opacity-65 hover:c-[#ff6900]! transition-colors"
          >
            <v-icon icon="mdi-thumb-up-outline" color="inherit" :size="16" />
            <text class="text-13px ml-3px">{{ post.state.likeCount }}</text>
          </v-btn>
        </div>

        <expansion :expanding="post.commentExpanded">
          <div class="py-12px">
            <text class="text-20px font-weight-black">评论</text>
            <text class="text-14px opacity-65 ml-16px">{{ post.state.commentCount }}</text>
          </div>
          <div class="flex pl-24px">
            <div class="h-56px w-56px flex items-center justify-center">
              <v-avatar :image="post.user.avatar" :size="52" />
            </div>
            <div class="flex-1 pl-18px">
              <textarea-form
                variant="outlined"
                placeholder="你猜我的评论区在等待谁？"
                :rows="1"
                :post="false"
              />
            </div>
          </div>
          <div class="pl-24px">
            <div
              v-for="(comment, _index) in commentList"
              :key="`comment-${_index}`"
              class="flex"
            >
              <div class="h-46px w-46px flex items-center justify-center">
                <v-avatar :image="post.user.avatar" />
              </div>
              <div class="flex-1 pl-18px">
                <div class="flex h-36px flex items-center">
                  <div class="text-1.125em font-weight-normal">{{ comment.user.nickname }}</div>
                </div>
                <div class="pt-8px" v-html="comment.content" />
                <div class="flex items-center gap-12px pt-12px">
                  <div class="text-14px opacity-65">{{ dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</div>

                  <v-btn
                    variant="plain"
                    class="px-0px! w-64px! h-24px! min-w-unset! opacity-65 hover:c-[#ff6900]! transition-colors"
                  >
                    <v-icon icon="mdi-thumb-up-outline" color="inherit" :size="16" />
                    <text class="text-13px ml-3px">{{ comment.state.likeCount }}</text>
                  </v-btn>

                  <v-btn
                    variant="plain"
                    class="px-0px! w-64px! h-24px! min-w-unset! opacity-65 hover:c-[#ff6900]! transition-colors"
                    @click="comment.commentExpanded = ! comment.commentExpanded"
                  >
                    <v-icon icon="mdi-comment-outline" color="inherit" :size="16" />
                    <text class="text-13px ml-3px">回复</text>
                  </v-btn>

                  <div class="flex-1" />

                  <v-btn
                    variant="flat"
                    class="px-0px! w-24px! h-24px! min-w-unset! bg-transparent opacity-65"
                  >
                    <v-icon icon="mdi-dots-vertical" />
                  </v-btn>
                </div>

                <expansion :expanding="comment.commentExpanded">
                  <div class="pl-24px pt-16px flex">
                    <div class="h-56px w-56px flex items-center justify-center">
                      <v-avatar :image="post.user.avatar" :size="52" />
                    </div>
                    <div class="flex-1 pl-18px">
                      <textarea-form
                        variant="outlined"
                        :placeholder="`回复 @${comment.user.nickname}:`"
                        :rows="1"
                        :post="false"
                      />
                    </div>
                  </div>
                </expansion>
                <v-divider v-if="_index + 1 !== commentList.length" class="my-16px mr--18px" />
              </div>
            </div>
          </div>
        </expansion>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
