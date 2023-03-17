// 乘积为7
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 给定n个整数a1, a2, a3 … an。每次操作可以选择其中一个数，并将这个数加上1或者减去1。小红非常喜欢7这个数，他想知道至少需要多少次操作可以使这n个数的乘积为7？

// 输入描述
// 第一行输入一个正整数n，表示整数的个数。

// 第二行输入n个整数a1, a2, a3 … an，其中ai 表示第i个数。

// 输出描述
// 输出一个整数，表示将所有数的乘积变为7最少需要的操作次数。

// 样例输入
// 5
// -6 0 2 -2 3
// 样例输出
// 6

// 提示
// 1 ≤ n ≤ 30000，-109  ≤ ai ≤ 109

// 样例说明

// 一种可能的操作方式如下：

// 第一次操作将a1减1，得到[-7,0,2,-2,3]

// 第二次操作将a4加1，得到[-7,0,2,-1,3]

// 第三次操作将a3减1，得到[-7,0,1,-1,3]

// 第四次操作将a5减1，得到[-7,0,1,-1,2]

// 第五次操作将a5减1，得到[-7,0,1,-1,1]

// 第六次操作将a2加1，得到[-7,1,1,-1,1]，此时所有数的乘积为7。

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

while ((line = read_line()) != '') {
  let len = parseInt(line)
  let cj = read_line()
    .split(' ')
    .map(v => parseInt(v))
  console.log(cj)
  console.log(cj7(len, cj))
}

const cj8 = [-6, 0, 2, -2, 3]
//通过加减1使得cj8的所有数乘积为7的最小操作次数
function cj7(len, cj) {
  let count = 0
  while (cj.reduce((a, b) => a * b) != 7) {
    for (let i = 0; i < len; i++) {
      if (cj[i] > 0) {
        cj[i]--
        count++
        break
      }
    }
  }
}

 console.log(cj7(5, cj8))

