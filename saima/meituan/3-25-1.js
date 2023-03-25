

// 定义一个栈
class Stack{
    constructor(){
        this.stack = []
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length - 1]
    }
    isEmpty(){
        return this.stack.length === 0
    }
    size(){
        return this.stack.length
    }
}

// 定义函数判断给定的进站序列和出战序列是否匹配

function isMatch(inArr, outArr) {

  const n = inArr.length
  const stack = new Stack()

  let i = 0, j = 0

  console.log('inArr', inArr, 'outArr', outArr)

  while (i < n) { 
    console.log('stack', stack.stack, 'i', i, 'j', j)
    if(!stack.isEmpty() && stack.peek() === outArr[j]) {
      console.log('pop', stack.stack[stack.stack.length - 1])
      stack.pop()
      j++
    } else {
      console.log('push', inArr[i])
      stack.push(inArr[i])
      i++
    }
  }

  while (!stack.isEmpty() && stack.peek() === outArr[j]) {
    console.log('pop', stack.stack[stack.stack.length - 1])
    stack.pop()
    j++
  }

  return j === n
  
}

let T = 0
let n = 0

let inArr = [], outArr = []

while ((line = read_line()) != '') {
  if (T === 0) {
    T = parseInt(line)
  } else if (n === 0) {
    n = parseInt(line)
  } else if (inArr.length < n) {
    inArr = line.split(' ').map(v => parseInt(v))
  } else if (outArr.length < n) {
    outArr = line.split(' ').map(v => parseInt(v))

    if (isMatch(inArr, outArr)) {
      console.log('Yes')
    }else {
      console.log('No')
    }

    n = 0
    inArr = []
    outArr = []
    T--
  }
}