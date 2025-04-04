<script setup lang="ts">

import dayjs from "dayjs";
import {type DropTargetMonitor, useDrop} from "vue3-dnd";
import {FILE_ITEM, type FileItemEntity} from "@/components/cloud/types";
import {computed, unref} from "vue";

const props = defineProps<{
  item?: FileItemEntity
}>()

const emit = defineEmits<{
  enter: []
}>()

const hoverIn = ref<dayjs.Dayjs>();

const [collect, drop] = useDrop(() => ({
  accept: [ FILE_ITEM ],
  drop: () => props.item,
  canDrop: (item: FileItemEntity) => {
    return props.item === undefined || props.item?.type === 'directory' && item.id !== props.item.id
  },
  hover: (item: FileItemEntity, monitor: DropTargetMonitor) => {
    if (! monitor.canDrop()) return
    if (! monitor.isOver()) {
      hoverIn.value = dayjs()
    } else {
      if (dayjs().diff(hoverIn.value) > 1000) {
        emit('enter')
        hoverIn.value = undefined
      }
    }
  },
  collect: (monitor: DropTargetMonitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const isOver = computed(() => unref(collect).isOver)
const canDrop = computed(() => unref(collect).canDrop)
const isDropping = computed(() => unref(isOver) && unref(canDrop))

const opacity = computed<number>(() => unref(isDropping) ? .65 : 1)
const background = computed<string>(() => unref(isDropping) ? 'rgba(0,0,0,.2)' : 'transparent')

</script>

<template>
  <div :ref="drop" :style="{ opacity, background }" class="rd-4px">
    <slot />
  </div>
</template>

<style scoped lang="sass">

</style>
