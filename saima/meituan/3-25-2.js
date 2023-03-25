// 小美明天要去春游了。她非常喜欢吃巧克力，希望能够带尽可能多的巧克力在春游的路上吃。她现在有n个巧克力，很巧的是她所有的巧克力都是厚度一样的正方形的巧克力板，这n个巧克力板的边长分别为a1,a2,...,an。因为都是厚度一致的正方形巧克力板，我们认为第 i 个巧克力的重量为。小美现在准备挑选一个合适大小的包来装尽可能多的巧克力板，她十分需要你的帮助来在明天之前准备完成，请你帮帮她。

/**
 * 输入描述:
 * 第一行两个整数n和m，表示小美的巧克力数量和小美的询问数量。
 * 第二行n个整数a1,a2,...,an，表示n块正方形巧克力板的边长。注意你不能将巧克力板进行拆分。
 * 第三行m个整数q1,q2,...,qm，第 i 个整数qi表示询问：如果小美选择一个能装qi重量的包，最多能装多少块巧克力板？（不考虑体积影响，我们认为只要质量满足要求，巧克力板总能塞进包里）
 * 1≤n,m≤50000,1≤ai≤104,1≤qi≤1018
 *
 * 示例：
 * 5 5
 * 1 2 2 4 5
 * 1 3 7 9 15
 */

/**
 * 输出描述:
 *  输出一行m个整数，分别表示每次询问的答案。
 * 示例：
 * 1 1 2 3 3
 */

let n
let m
let arr
let queue
let w

while ((line = read_line()) != '') {
  if (!n) {
    ;[n, m] = line.trim().split(' ').map(Number)
  } else if (!arr) {
    arr = line.trim().split(' ').map(Number)
    arr.sort((a, b) => a - b)
  } else {
    queue = line.trim().split(' ').map(Number)
    w = new Array(m).fill(0)

    for (let i = 0; i < m; i++) {
      let sum = queue[i]
      let l = 0,
        r = n - 1
      while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] <= sum) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      w[i] = l
      l = 0
      r = n - 1
    }
    //减去下标的偏移量
    console.log(w.map((v, i) => v - i).join(' '))
  }
}

// let n, m
// let arr
// let queue
// let sum

// while ((line = read_line()) != '') {
//   if (!n) {
//     ;[n, m] = line.split(' ').map(v => parseInt(v))
//   } else if (arr.length < n) {
//     arr.push(line.split(' ').map(v => parseInt(v)))
//   } else {
//     queue.push(line.split(' ').map(v => parseInt(v)))
//     if (q.length === m) {
//       sum[0] = a[0]
//       for (let i = 1; i < n; i++) {
//         sum[i] = sum[i - 1] + a[i]
//       }
//       for (let i = 0; i < m; i++) {
//         let j = 0
//         while (j < n && sum[j] <= q[i]) {
//           j++
//         }
//         console.log(j)
//       }
//     }
//   }
// }
