// 给定一个包含‘0’， ‘1’的字符串，每次操作可以选择相邻的两个字符，将它们同时变为‘1’或同时变为 0，请问最少需要多少次操作后，所有字符串相同

// function solution(str) {
//   let count = 0
//   let count2 = 0
//   let len = str.length
//   let arr = str.split('')
//   for (let i = 0; i < len; i++) {
//     if (arr[i] === '0') {
//       count++
//       i++
//     }
//   }
//   for (let j = 0; j < len; j++) {
//     if (arr[i] === '1') {
//       count2++
//       j++
//     }
//     if ((arr[i] === arr[i + 1]) === arr[i + 2]) {
//       count2--
//     }
//   }
//   return Math.min(count, count2)
// }

// 连续子数组数量
// 给定一个数组,请你编写一个函数，返回元素乘积末尾零数量大于等于x的连续子数组数量。
// 答案可能很大，返回对10^9+7取模后的结果。
// 输入[5,2,3,50,4],2
// 输出 6

function solution2(a, x) {
  let count = 0
  // 1.求出数组可能的排列
  let arr = []
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      arr.push(a.slice(i, j + 1))
    }
  }
  // 2.求出arr数组的乘
  arr.forEach(element => {
    let mul = element.reduce((a, b) => a * b)
    //如果mul末尾零数量大于等于x，count++
    if (mul % Math.pow(10, x) === 0) {
      count++
    }
    console.log(mul)
  })
  console.log(arr)
  return count
}
console.log(solution2([5, 2, 3, 50, 4], 2))
