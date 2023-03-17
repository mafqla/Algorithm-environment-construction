var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

// 实现队列
class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 向队列添加元素
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  // 从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 判断队列是否为空并获取它的长度
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  // 获取队列的长度
  size() {
    return this.count - this.lowestCount
  }
  // 清空队列
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  // 获取队列的内容
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

// 实现栈
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  // 向栈添加元素
  push(element) {
    this.items[this.count] = element
    this.count++
  }

  // 从栈移除元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 判断栈是否为空并获取它的长度
  isEmpty() {
    return this.count === 0
  }

  // 获取栈的长度
  size() {
    return this.count
  }
  // 清空栈
  clear() {
    this.items = {}
    this.count = 0
  }

  // 获取栈的内容
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.count - 1]}`
    for (let i = this.count - 2; i >= 0; i--) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const dispatchTrain = (n, arr) => {
  let A = new Queue()
  let B = new Queue()
  let C = new Stack()
  let p = 0

  for (let i = 1; i <= n; i++) {
    A.enqueue(i)
  }

  while (!A.isEmpty()) {
    if ((coach = A.dequeue()) === parseInt(arr[p])) {
      
      B.enqueue(coach)
      p++
    } else {
      C.push(coach)
    }
  }

  while (!C.isEmpty()) {
    if ((coach = C.pop()) === parseInt(arr[p])) {
      B.enqueue(coach)
      p++
    } else {
      return 'NO'
    }
  }
  return 'YES'
}
console.log('请输入车厢数量：')
while ((line = read_line())) {
  const n = parseInt(line)
  console.log('请输入车厢顺序：')
  const arr = read_line().split(' ')
  if (arr.length !== n) {
    console.log('车厢数量错误')
    break
  }
  const result = dispatchTrain(n, arr)
  console.log(result)
}
