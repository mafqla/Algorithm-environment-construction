// 小美在摆弄她的字符串。最近小团送了小美一个特殊字符 ' * '，这个字符可以和其他所有字符匹配，除了这个字符外，其他字符只能自己和自己匹配。小美先前有一个字符串S，长度为n，现在她又新组合了一个可有特殊字符 ' * ' 的字符串s，长度为m。小美想知道有多少个位置 i，使得S[i+j]与s[j]对于1≤j≤m均能匹配上？其中X[y]代表字符串X中第y位的字符。

// 输入描述
// 第一行两个空格隔开的正整数n和m，分别表示字符串S和字符串s的长度。

// 接下来一行长度为n的仅包含小写英文字母的字符串S

// 接下来一行长度为m的包含小写英文字母以及特殊字符 ' * ' 的字符串s

// 对于所有数据，1≤m≤n≤2000

// 输出描述
// 输出一行一个整数，表示满足要求的位置数量
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

// let arr = []
// let str = ''
// while ((line = read_line()) != '') {
//   arr.push(line.split(' ').map(v => parseInt(v)))
//   str = line.split('')
//   console.log(str)

//   // let arr = line.split(' ')
//   // let a = parseInt(arr[0])
//   // let b = parseInt(arr[1])
//   // let c = solveMeFirst(a, b)
//   // console.log(c)
// }
// console.log(arr[1])

// 字符串长度
// let len = 7
// // 匹配的字符串长度
// let matchLen = 3
// // 匹配的字符串
// let str = 'abcaacc'
// // 由matchStr在str组成的字符串个数
// let matchStr = 'a*c'

// 输入7 3
// abcaacc
// a*c

while ((line = read_line()) != '') {
  let arr = line.split(' ').map(v => parseInt(v))
  len = arr[0]
  matchLen = arr[1]
  str = read_line()
  matchStr = read_line()
  console.log(matchStrNums(len, matchLen, str, matchStr))
}

function matchStrNums(len, matchLen, str, matchStr) {
  let count = 0
  for (let i = 0; i < len - matchLen + 1; i++) {
    let temp = str.slice(i, i + matchLen)
    console.log(temp)
    //  如果匹配的字符串由a*c组成，那么temp只能是a开头，c结尾，中间是任意字符
    // *之前的一位字符串
    let preStr = matchStr.slice(0, matchStr.indexOf('*'))
    // *之后的一位字符串
    let nextStr = matchStr.slice(matchStr.indexOf('*') + 1)

    // 如果temp的前缀和preStr相同，且temp的后缀和nextStr相同，那么temp就是由matchStr组成的
    if (preStr === temp[0] && nextStr === temp[matchLen - 1]) {
      count++
    }
  }
  return count
}

// console.log(matchStrNums(len, matchLen,str, matchStr))
