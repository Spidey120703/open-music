import { ref, unref, type Ref, type ComponentPublicInstance } from "vue";


/**
 * 动态计算列数 - 根据父组件宽度响应式修改列数
 * @param config 配置
 * @param config.containerRef 容器元素的ref
 * @param config.gap 列间距
 * @param config.minWidth 列最小宽度
 * @returns columns - 列数
 */
export const useDynamicColumns = (config: {
  containerRef: Ref<ComponentPublicInstance | HTMLElement> | ComponentPublicInstance | HTMLElement
  gap: number
  minWidth: number
}) : { columns: Ref<number> } => {

  const columns = ref<number>(0)

  const calculate = (entry: ResizeObserverEntry) => {
    const count = Math.trunc(entry.contentRect.width / config.minWidth)
    if (((count - 1) * config.gap) + count * config.minWidth > entry.contentRect.width) {
      columns.value = count - 1
    } else {
      columns.value = count
    }
  }

  const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    requestAnimationFrame(() => calculate(entries[0]))
  });

  onMounted(() => {
    const container = unref(config.containerRef)
    if (container instanceof HTMLElement) {
      observer?.observe(container)
    } else {
      observer?.observe(container.$el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { columns }
}
