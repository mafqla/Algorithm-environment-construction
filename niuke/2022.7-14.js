// LRU缓存的实现
// 1. 定义一个类 LRUCache，实现以下方法：
// 2. put(key, value)：插入一个新的键值对。如果该键值对已存在，则覆盖原有的键值对。
// 3. get(key)：返回键对应的值。如果键不存在，返回 -1。
// 4. remove(key)：删除键对应的值。如果键不存在，返回 -1。
// 5. print()：打印所有的键值对。
// 6. 注意：
// 1. 如果键值对数目超过了缓存容量，则应该在插入新的键值对之前，使用移除最近最少使用的键值对的方式移除一个键值对。
// 2. 如果键值对数目超过了缓存容量，则应该在插入新的键值对之前，使用移除最近最少使用的键值对的方式移除一个键值对。



const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function (line) {
  
  var tokens = line.split(' ')
  if (tokens.length >= tokens[0]) {
    return rl.close()
  } else {
    let cache = new LRUCache(tokens)
    for (let i = 1; i < tokens.length; i++) {
      let key = tokens[i].split(',')[0]
      let value = tokens[i].split(',')[1]
      cache.put(key, value)
    }
     return console.log(cache.map)
  }
  
})
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}
LRUCache.prototype.get = function (key) {
  let map = this.map
  if (map.has(key)) {
    let value = map.get(key)
    map.delete(key)
    map.set(key, value)
    return value
  } else {
    return -1
  }
}
LRUCache.prototype.put = function (key, value) {
  let map = this.map
  if (map.has(key)) {
    map.delete(key)
  }
  if (map.size >= this.capacity) {
    let key = map.keys().next().value
    map.delete(key)
  }
  map.set(key, value)
}
