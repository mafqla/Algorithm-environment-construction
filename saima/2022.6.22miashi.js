//  第一题：圣诞树

function christmasTree(height) {
  for (var i = 1; i <=height; i++) {
    star = ''
    kon = ''
    for (var j = 0; j < height - i; j++) {
      kon += ' '
    }

    for (var k = 0; k <= i*2-2; k++) {
      star += '*'
    }
    console.log(kon+star)
  }
}
let height = 5
christmasTree(height)

// 第二题统计字母次数
// 统计出现频率最高的字母、数字
let str = 'aslxjkgakfakerkxlkfeikakdck12223'
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
console.log(strObjArrSort[0].join(':'))