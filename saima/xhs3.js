// 最小过路费用
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小明的旅途中需要经过一个国家。这个国家有n个城市，编号为1到n。小明会从1号城市进入，目标是从n号城市出去（即要从1号城市到达n号城市）。有m条双向道路连接这n个城市，每条道路的长度都是1，并且都有一个过路费（是[1,100000]之间的整数）。当小明在一号城市时，他可以预先花费X的费用办一张特权卡，他可以获得所有过路费不超过X的道路的通行权（而其他道路无法通过）。小明一天最多只能走k长度的路，他想知道如果他想在一天之内从1号城市走到n号城市，他最少需要花费多少来办特权卡，即求X的最小值？



// 输入描述
// 第一行是3个整数n，m，k，分别表示城市数，道路数和小明一天最多能走的长度。

// 第二行m个整数，分别为u1, u2, …, um，分别表示第i条道路的一个端点。

// 第三行m个整数，分别为v1, v2, …, vm，分别表示第i条道路的另一个端点。

// 第四行m个整数，分别为w1, w2, …, wm，分别表示第i条道路的过路费。

// 数字间两两有空格隔开。数据保证一定存在解。

// 输出描述
// 一行一个整数，表示X的最小值。


// 样例输入
// 5 6 3
// 1 1 2 3 3 4
// 2 5 3 4 5 5
// 1 3 1 2 1 1
// 样例输出
// 1

// 提示
// n<=100000，m<=200000，1<=w<=100000。



// 代码

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

while ((line = read_line()) != '') {
  //表示城市数
  let n = line.split(' ')[0]
  //表示道路数
  let m = line.split(' ')[1]
  //表示小明一天最多能走的长度
  let k = line.split(' ')[2]
  //表示第i条道路的一个端点
  let u = read_line().split(' ')
  //第i条道路的另一个端点
  let v = read_line().split(' ')
  //表示第i条道路的过路费
  let w = read_line().split(' ')

  // 求小明最少需要花费多少来办特权卡
  let min = 1
  let max = 100000
  let mid = 0
  while (min < max) {
    mid = Math.floor((min + max) / 2)
    if (check(mid, n, m, k, u, v, w)) {
      max = mid
    } else {
      min = mid + 1
    }
  }
  console.log(min)
}