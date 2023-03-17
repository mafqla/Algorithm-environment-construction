var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.on('line', (input) => {
//   console.log(`接收到：${input}`)
//   rl.close()
// })
var line

var removeDuplicates = function (nums) {
  let numsArr = nums
  return Array.from(new Set(numsArr))
}
while ((line = read_line())) {
  const nums = line
  const result = removeDuplicates(nums)
  console.log(result)
}
