var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

const suffix = (tokens) => {
  let stack = [tokens[0]]
  const tokensMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }
  for (let i = 1; i < tokens.length; i++) {
    if (!tokensMap[tokens[i]]) {
      stack.push(tokens[i])
    } else {
      let second = stack.pop()
      let first = stack.pop()
      let func = tokensMap[tokens[i]]
      stack.push(func(parseInt(first), parseInt(second)))
    }
  }
  return stack[0]
}
while ((line = read_line())) {
  const tokenList = line.split(' ')
  const list = []
  for (const i in tokenList) {
    //判断是否是运算符
    if (tokenList[i].match(/[\+\-\*\/]/)) {
      const tokenResult = tokenList[i]
      for (let j in tokenResult) {
        if (tokenResult[j].match(/[\+\-\*\/]/)) {
          list.push(tokenResult[j])
        }
      }
      tokenList.pop(tokenResult)
    }
  }
  const tokens = tokenList.concat(list)
  const result = suffix(tokens)
  console.log(result)
}
