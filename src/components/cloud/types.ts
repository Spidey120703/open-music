export const FILE_ITEM = 'file-item'

export interface FileItemEntity {
  id: number
  name: string
  type: 'directory' | 'file'
}
