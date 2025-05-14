type ItemType = 'directory' | 'file'

export interface ItemRecord {
  id: number
  name: string
  type: ItemType
  pid?: number
}

const driver = reactive<ItemRecord[]>([]);

export function add(item: {name: string, type: ItemType, pid?: number}) {
  const id = driver.length
  driver.push({
    id,
    ... item
  })
  return id
}

export function get(id: number) {
  return driver.find(item => item.id === id)
}

export function getChildren(id?: number) {
  return driver.filter(item => item.pid === id).sort((a, b) => a.name.localeCompare(b.name))
}

export function move(id: number, to?: number) {
  const src = get(id)
  if (src === undefined) return;
  if (to === undefined) {
    src.pid = undefined
    return;
  }
  const dst = get(to)
  if (dst === undefined) return;
  if (dst.type !== 'directory') return;
  src.pid = dst.id
}


(() => {
  let id: number;
  id = add({ name: 'Coldplay', type: 'directory' })
  add({ pid: id, name: 'Moon Music', type: 'directory'})
  add({ pid: id, name: 'Music Of The Spheres', type: 'directory'})
  add({ pid: id, name: 'Everyday Life', type: 'directory'})
  add({ pid: id, name: 'Mylo Xyloto', type: 'directory'})
  id = add({ pid: id, name: 'A Head Full of Dreams', type: 'directory'})
  add({ pid: id, name: 'A Head Full of Dreams.flac', type: 'file' })
  add({ pid: id, name: 'Birds.flac', type: 'file' })
  add({ pid: id, name: 'Everglow.flac', type: 'file' })
  add({ pid: id, name: 'Fun (feat. Tove Lo).flac', type: 'file' })
  add({ pid: id, name: 'Army of One.flac', type: 'file' })
  add({ pid: id, name: 'Amazing Day.flac', type: 'file' })
  add({ pid: id, name: 'Up&Up.flac', type: 'file' })
  id = add({ pid: get(id)?.pid, name: 'Ghost Stories', type: 'directory'})
  add({ pid: id, name: 'Always In My Head.flac', type: 'file' })
  add({ pid: id, name: 'Magic.flac', type: 'file' })
  add({ pid: id, name: 'Ink.flac', type: 'file' })
  add({ pid: id, name: 'True Love.flac', type: 'file' })
  add({ pid: id, name: 'Midnight.flac', type: 'file' })
  add({ pid: id, name: 'Another\'s Arms.flac', type: 'file' })
  add({ pid: id, name: 'Oceans.flac', type: 'file' })
  add({ pid: id, name: 'A Sky Full of Stars.flac', type: 'file' })
  add({ pid: id, name: 'O (Hidden Track).flac', type: 'file' })
  id = add({ name: 'OneRepublic', type: 'directory' })
  id = add({ name: 'Imagine Dragons', type: 'directory' })
  id = add({ name: 'Maroon 5', type: 'directory' })
  id = add({ name: 'U2', type: 'directory' })
})()
