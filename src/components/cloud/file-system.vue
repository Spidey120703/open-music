<script setup lang="ts">

import PathBreadcrumbs from "./path-breadcrumbs.vue";

import {NativeTypes} from 'react-dnd-html5-backend'
import {type DropTargetMonitor, useDrop} from 'vue3-dnd'
import {computed, unref} from 'vue'

import Item from "./item.vue";
import { FILE_ITEM } from "./types";
import { getChildren, type ItemRecord } from "@/components/cloud/fs";
import {emitter} from "@/utils/emitter";

interface UploadFileEntry {
  path: string[]
  file: File
}


/**
 * 处理拖拽的文件
 *
 * @param entry
 * @param path
 */
const handleFiles = async (entry: FileSystemEntry, path?: string[]) => {
  if (path === undefined) {
    path = [];
  }

  const uploadFileEntries: UploadFileEntry[] = []

  if (entry.isFile) {
    const file = await new Promise<File>((resolve, reject) => {
      (entry as FileSystemFileEntry).file(resolve, reject)
    })
    uploadFileEntries.push({ path, file })
  } else if (entry.isDirectory) {
    const reader: FileSystemDirectoryReader = (
      entry as FileSystemDirectoryEntry).createReader()
    const entries = await new Promise<FileSystemEntry[]>(
      (resolve, reject) => reader.readEntries(resolve, reject))
    for (const entry of entries) {
      uploadFileEntries.push(... await handleFiles(entry, [...path, entry.name]))
    }
  }

  return uploadFileEntries
}

const [fileCollect, fileDrop] = useDrop(() => ({
  accept: [ NativeTypes.FILE ],
  drop(item: any) {
    for (const dataTransferItem of item.items) {
      const entry = dataTransferItem.webkitGetAsEntry()
      if (entry) {
        handleFiles(entry).then(entries => {
          upload(entries)
        })
      }
    }
  },
  collect: (monitor: DropTargetMonitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const upload = (entries: UploadFileEntry[]) => {
  console.log('上传', entries)
}

const isOver = computed(() => unref(fileCollect).isOver)
const canDrop = computed(() => unref(fileCollect).canDrop)
const isFileDropping = computed(() => unref(isOver) && unref(canDrop))


const [, itemDrop] = useDrop(() => ({
  accept: [ FILE_ITEM ],
  drop: () => unref(current),
  canDrop: (_, monitor) => monitor.isOver({ shallow: true }),
}))

const drop = (ref: Element | ComponentPublicInstance | null) => {
  fileDrop(ref as Element);
  itemDrop(ref as Element);
};

const current = ref<ItemRecord>()
const itemList = ref<ItemRecord[]>([])

const reload = () => {
  itemList.value = getChildren(current.value?.id)
}

const pathStack = ref<ItemRecord[]>([])

const enter = (item?: ItemRecord) => {
  if (item === undefined) {
    pathStack.value = []
    current.value = item
    reload()
    return
  }
  if (item.type !== 'directory') return
  pathStack.value.push(item)
  current.value = item
  reload()
}

onMounted(() => {
  reload()

  emitter.on('fs-refresh', () => {
    reload()
  })
})

onUnmounted(() => {
  emitter.off('fs-refresh')
})
</script>

<template>
  <div :ref="drop" class="bg-white w-100% h-[calc(100%-64px)] overflow-y-scroll relative">
    <PathBreadcrumbs
      v-model="pathStack"
      class="sticky top-0 left-0 right-0 z-100 backdrop-blur-lg bg-#ffffffcc"
      style="box-shadow: 0 0 0 1px #eee;"
      @enter="enter"
    />
    <div class="file-viewer z-2 h-0px">
      <Item
        v-for="item in itemList"
        :id="item.id"
        :key="`item-${item.id}`"
        :name="item.name"
        :type="item.type as ('directory' | 'file')"
        @dblclick="enter(item)"
        @enter="enter"
      />
    </div>

    <div
      v-show="isFileDropping"
      class="upload-mask absolute top-0 left-0 w-100% h-100% flex items-center justify-center"
    >
      <v-icon icon="mdi-plus-box-outline ma-8px" />
      <div>松开上传文件...</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.file-viewer
  display: grid
  grid-template-columns: repeat(auto-fill, 100px)
  grid-template-rows: repeat(auto-fill, 108px)
  gap: 12px
  padding: 12px

.upload-mask
  background: rgba(0, 0, 0, 0.125)
  color: #ff6900
  backdrop-filter: blur(24px)
</style>
