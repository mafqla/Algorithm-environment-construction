// 已知一个序列的生成方式如下：

// • 序列生成需要一个基础序列A，这个序列由n个 不大于100的数字组成，同时给定镜像复制次数m。

// • 然后对于A进行m次镜像复制，例如序列A={1，2，3}，则一次镜像复制后得到的序列是{1，2，3，3，2，1}，两次镜像复制得到的序列是B={1，2，3，3，2，1，1，2，3，3，2，1} 。

// 现在给出你生成一个序列所需要的参数，请你计算该序列的第k位是多少。

// 输入描述
// 输入第一行包含三个整数n，m，k，含义如题所示。(1<=n<=100,1<=m<=60,1<=k<=1e18，部分数据k<10000)

// 输入第二行包含n个正整数，每个正整数都不大于100，表示基础序列A。

// 数字间有空格隔开

// 输出描述
// 输出仅包含一个正整数，即序列第k位的数字。

// 样例输入
// 3 3 10
// 1 2 3
// 样例输出
// 3

//代表序列的长度
let n = 3
// 代表复制的次数
let m = 3
// 代表要输出的
let k = 10

let a = [1, 2, 3]

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

while ((line = read_line()) != '') {
  let arr = line.split(' ').map(v => parseInt(v))
  len = arr[0]
  cnums = arr[1]
  k = arr[2]
  xulie = read_line()
    .split(' ')
    .map(v => parseInt(v))

  k = (k - 1) % (2 * len)
  xl = xulie.concat(xulie.reverse())
  console.log(xl)
  console.log(xl[k])
}

// function copyXl(len, cnums, k, xulie) {
//   let xl = xulie
//   function copyArr(arr) {
//     let newArr = arr.slice()
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i])
//     }
//     return newArr
//   }
//   for (let i = 0; i < cnums-1; i++) {
//     xl = copyArr(xl)
//   }
//   //返回第k个数
//   return xl[k - 1]
// }
