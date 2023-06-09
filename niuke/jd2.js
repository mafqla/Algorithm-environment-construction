
// 每次都挑选重复的删除，将删除的置为-1，使用js数组的indexOf，不是第一次出现的且不为-1的就是要删除的
// 删到全是不重复的，且还剩余删除次数时候就已经是好数组了
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let n, k
rl.on('line', function (line) {
  let arr = line.split(' ').map(Number)
  if (arr.length === 2) [n, k] = arr
  if (arr.length === n) {
    for (let i = 0; i < parseInt(n / k); i++) {
      //每次删除k个,每次挑选重复的删除
      let cnt = k
      for (let j = 0; j < n; j++) {
        if (arr[j] !== -1 && arr.indexOf(arr[j]) !== j) {
          arr[j] = -1
          if (cnt-- === 1) break
        }
      }
    }
    let flag = true
    for (let j = 0; j < n; j++)
      if (arr[j] !== -1 && arr.indexOf(arr[j]) !== j) flag = false
    if (flag) console.log('Yes')
    else console.log('No')
  }
})
