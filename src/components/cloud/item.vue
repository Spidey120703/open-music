<script setup lang="ts">
import {type DragSourceMonitor, type DropTargetMonitor, useDrag, useDrop} from 'vue3-dnd'
import { computed, unref } from 'vue'
import dayjs from "dayjs";
import {FILE_ITEM, type FileItemEntity} from "./types";
import {type ItemRecord, move} from "@/components/cloud/fs";
import {emitter} from "@/utils/emitter";

const props = defineProps<FileItemEntity>()
const emit = defineEmits<{
  enter: [ItemRecord],
}>()

const [dragCollect, drag] = useDrag(() => ({
  type: FILE_ITEM,
  item: unref(props),
  end: (item: FileItemEntity, monitor: DragSourceMonitor) => {
    const dropResult = monitor.getDropResult<FileItemEntity>()
    if (item && dropResult) {
      console.log(`You dropped ${item.name} into ${dropResult.name}!`)
      move(item.id, dropResult.id)
      emitter.emit('fs-refresh')
    }
  },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
  }),
}))

const hoverIn = ref<dayjs.Dayjs>();

const [dropCollect, drop] = useDrop(() => ({
  accept: [ FILE_ITEM ],
  drop: () => unref(props),
  canDrop: (item: FileItemEntity) => {
    return props.type === 'directory' && item.id !== props.id
  },
  hover: (item: FileItemEntity, monitor: DropTargetMonitor) => {
    if (! monitor.canDrop()) return
    if (! monitor.isOver()) {
      hoverIn.value = dayjs()
    } else {
      if (dayjs().diff(hoverIn.value) > 1000) {
        emit('enter', unref(props))
      }
    }
  },
  collect: (monitor: DropTargetMonitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const dragdrop = (ref: Element | ComponentPublicInstance | null) => {
  drag(ref as Element);
  drop(ref as Element);
};

const isDragging = computed<boolean>(() => unref(dragCollect).isDragging)

const isOver = computed(() => unref(dropCollect).isOver)
const canDrop = computed(() => unref(dropCollect).canDrop)
const isDropping = computed(() => unref(isOver) && unref(canDrop))

const opacity = computed<number>(() => (unref(isDragging) ? 0 : unref(isDropping) ? .65 : 1))
const display = computed<string>(() => unref(isDragging) ? 'none' : 'block')
</script>

<template>
  <div :ref="dragdrop" :style="{ opacity, display }" class="file-item h-fit">
    <div class="w-100px h-100px flex justify-center items-center">
      <v-icon
        v-if="type === 'directory'"
        :icon="isDropping ? 'mdi-folder-open' : 'mdi-folder'"
        :size="84"
        color="#FFD354"
      />
      <v-icon
        v-else-if="type === 'file'"
        icon="mdi-file-music"
        :size="84"
        color="#ff6900"
      />
    </div>
    <div class="truncate text-13px text-center">{{ name }}</div>
  </div>
</template>

<style scoped lang="sass">

.file-item
  &:hover
    background: rgba(0,0,0,.08)
  &:active
    box-shadow: 0 0 0 1px rgba(0,0,0,.2)

</style>
