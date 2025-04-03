<script setup lang="ts">

import {getChildren} from "@/components/cloud/fs";
import DropBreadcrumb from "@/components/cloud/drop-breadcrumb.vue";
import type {FileItemEntity} from "@/components/cloud/types";

const pathStack = defineModel<FileItemEntity[]>()
const breadcrumbsItems = computed(() => {
  const items = pathStack.value?.map(item => ({
    title: item.name,
    disabled: false,
    href: '#',
    meta: item
  })) || [] as any[]
  items.unshift({
    title: '根目录',
    href: '/'
  })
  return items
})

const siblingList = ref<FileItemEntity[]>([])

const loadSibling = (id: number) => {
  siblingList.value = getChildren(id)
}

const emit = defineEmits<{
  enter: [item?: FileItemEntity]
}>()

const enter = (item: FileItemEntity, index: number) => {
  if (! pathStack.value) return;
  if (index === pathStack.value.length) return;
  pathStack.value.splice(index)
  emit('enter', item)
}

</script>

<template>
  <v-breadcrumbs :items="breadcrumbsItems" class="pa-4px!">
    <template #divider="{ item, index }">
      <v-menu>
        <template #activator="{ isActive, props }">
          <v-btn
            v-bind="props"
            variant="text"
            class="text-none h-unset! min-w-unset! pa-6px!"
            flat
            @click="loadSibling(item.meta?.id)"
          >
            <v-icon icon="mdi-chevron-right" class="transition-transform" :class="{ 'rotate-90': isActive }" />
          </v-btn>
        </template>
        <v-list slim density="compact">
          <v-list-item
            v-for="(sibling, i) in siblingList"
            :key="i"
            :value="sibling"
            @click="enter(sibling, index)"
          >
            <v-list-item-title>{{ sibling.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template #item="{ item, index }">
      <DropBreadcrumb
        :item="(item as any).meta"
        @enter="enter((item as any).meta as FileItemEntity, index - 1)"
      >
        <v-btn
          variant="text"
          class="text-none h-unset! min-w-unset! px-8px! py-6px!"
          flat
          @click="enter((item as any).meta as FileItemEntity, index - 1)"
        >
          <template v-if="item.href === '/'">
            <v-icon icon="mdi-cloud-outline" />
            <span class="font-weight-light ml-4px">{{ item.title }}</span>
          </template>
          <template v-else>
            <span class="font-weight-light">{{ item.title }}</span>
          </template>
        </v-btn>
      </DropBreadcrumb>
    </template>
  </v-breadcrumbs>
</template>

<style scoped lang="sass">
:deep(.v-breadcrumbs-divider)
  padding: 0 4px !important
:deep(.v-list)
  padding: 4px !important
  .v-list-item
    padding: 1px 4px !important
    min-height: 0 !important
    min-width: 128px !important
    border-radius: 3px !important
    .v-list-item-title
      font-size: 14px !important
  .v-list-item+.v-list-item
    margin-top: 4px
</style>
