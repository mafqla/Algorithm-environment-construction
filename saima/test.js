//  3、请两种方法对以下数组进行合并const arr1 = ['a', 'b']; const arr2 = ['c']; const arr3 = ['d', 'e']

const arr1 = ['a', 'b']
const arr2 = ['c']
const arr3 = ['d', 'e']

// 第一种
const newArr = [...arr1, ...arr2, ...arr3]
console.log(newArr)
// 第二种
const newArr2 = arr1.concat(arr2, arr3)
console.log(newArr2)

// 4、将以下数组去重let a = ['1', '2', '3', 1,NaN,NaN,undefined,undefined,null,null, 'a', 'b', 'b']

// 数组去重
let a = [
  '1',
  '2',
  '3',
  1,
  NaN,
  NaN,
  undefined,
  undefined,
  null,
  null,
  'a',
  'b',
  'b',
]

let b = [...new Set(a)]
console.log(b)

// 5、js 统计以下字符串中出现频率最高的字母/数字let str = 'aslxjkgakfakerkxlkfeikakdck'

// 统计出现频率最高的字母、数字
let str = 'aslxjkgakfakerkxlkfeikakdck'
let strArr = str.split('')
let strObj = {}
for (let i = 0; i < strArr.length; i++) {
  if (strObj[strArr[i]]) {
    strObj[strArr[i]]++
  } else {
    strObj[strArr[i]] = 1
  }
}
let strObjArr = Object.entries(strObj)
let strObjArrSort = strObjArr.sort((a, b) => {
  return b[1] - a[1]
})
// 输出出现频率最高的字母、数字
console.log(strObjArrSort[0][0])

// 6、请从2022-04-23T13:24:06 Europe/Paris提取出["2022","04","23","13","24","06"]

let strVaule = '2022-04-23T13:24:06 Europe/Paris'
// 使用正则表达式提取出数字
let strVauleArr = strVaule.match(/\d+/g)
console.log(strVauleArr)

// 7、数组中最大差值let arr = [6, 8, 16, 7, 55, 26, 6, 4, 88, -3]

let arr = [6, 8, 16, 7, 55, 26, 6, 4, 88, -3]
let arrSort = arr.sort((a, b) => {
  return a - b
})
let arrMax = arrSort[arrSort.length - 1]
let arrMin = arrSort[0]
let arrMaxMin = arrMax - arrMin
console.log(arrMaxMin)

// 8、对以下数组进行排序let arr = [22, 3, 7, 5, 12, 2]

// let arr = [22, 3, 7, 5, 12, 2]
// let arrSort = arr.sort((a, b) => {
//   return a - b
// }
// )
// console.log(arrSort)
