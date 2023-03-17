// 题目：构造一个a+b的数组， 其中有a个1，b个2，且任意相邻两个数的乘积为偶数,并输出，反之为-1
// 输入 2 2
// 输出 1 2 2 1

const readline = require('readline')

// let [a, b] = readline().split(' ').map(Number)

while (line = readline()) {
  let lines = line.split(' ')
  let a = parseInt(lines[0])
  let b = parseInt(lines[1])
  
  // a个1， b个2, 1的左右必须是2
  let ans = new Array(a + b).fill(2)
  if (b >= a || a === b + 1) {
    for (let i = 0; i < 2 * Math.min(b, a); i += 2) ans[i] = 1
    if (a === b + 1) ans[ans.length - 1] = 1
    console.log(ans.join(' '))
  } else {
    console.log(-1)
  }
}
