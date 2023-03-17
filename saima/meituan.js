// // // 饲料
// function feed(a, b, c) {
//   let compare = [a, b, c]
//   for (const i in compare) {
//     const a = compare[0] / 8
//     const b = compare[1] / 5
//     const c = compare[2] / 7
//     const total = Math.floor(a) + Math.floor(b) + Math.floor(c)
//     return total
//   }
// }
// console.log(feed(40, 11, 20))
// console.log([] ? true : false)
// console.log([] == false ? true : false)
// console.log({} == false ? true : false)

// let arr = []
// let line
// while ((line = read_line()) != '') {
//   arr.push(line.split(' ').map((v) => parseInt(v)))
// }

// let line
// while ((line = read_line()) != '') {
//   arr.push(
//     line
//       .replace(/\]\,/g, '')
//       .replace(/ /g, '')
//       .replace(/\[/g, '')
//       .replace(/\]/g, '')
//       .split(',')
//       .map(v => parseInt(v))
//   )
// }

// var __readline = require('readline-sync')
// __readline.setDefaultOptions({ prompt: '' })
// var read_line = __readline.prompt
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// rl.on('line', (input) => {
//   console.log(`接收到：${input}`)
//   // rl.close()
//   let compare = input.split(' ')
//   const a = compare[0] / 8
//   console.log(compare[0])
//   const b = compare[1] / 5
//   const c = compare[2] / 7
//   const total = Math.floor(a) + Math.floor(b) + Math.floor(c)
//   return console.log(total)
// })


// let length = 4
// let str = 'abcd'
// let str2 = 'efgh'

// function put(lenght, str, str2) {
//   let result = ''
//   for (let i = 0; i < lenght; i++) {
//     result += str[i] + str2[i]
//   }
//   return result
// }

// console.log(put(length, str, str2))

// let str = '2 1'
// let str1 = '89 38'
// let str2 = '445 754'

// // 如果都不复习，小美总分的期望为89%*445+38%*754=682.57
// // 如果复习第一道题，小美总分的期望为100%*445+38%*754=731.52
// // 如果复习第二道题，小美总分的期望为89%*445+100%*754=1150.05
// // 所以选择复习第二道题，这样能获得最大期望总分1150.05
// // 根据每题复习后的收益进行排序即可

// function getTotal(str) {
//   let arr = str.split(' ')
//   let a = arr[0] / 100
//   let b = arr[1] / 100
//   return a * 445 + b * 754
// }
