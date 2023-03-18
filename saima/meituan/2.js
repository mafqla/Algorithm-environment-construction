/**
 * 题目描述
 * 现在小美获得了一个字符串。小美想要使得这个字符串是回文串。
 * 小美找到了你。你可以将字符串中至多两个位置改为任意小写英文字符‘a'-z。你的任务是帮助小美在当前制约下,获得字典序最小的回文字符串。
 * 数据保证能在题目限制下形成回文字符串。
 * 注:回文字符串:即一个字符串从前向后和从后向前是完全一致的字符串。
 * 例如字符串abcba, aaaa, acca都是回文字符串。字符串abcd, acea都不是回文字符串。
 *
 * 输入描述:
 * 一行,一个字符串。字符串中仅由小写英文字符构成。保证字符串不会是空字符串。
 * 字符串长度介于[1,100000]之间。
 * 输出描述
 * 一行,一个在题目条件限制下所可以获得的字典序最小的回文字符串。
 */

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

while ((line = read_line()) != '') {
  let s = line.trim()
  let str = s.split('').reverse().join('')
  let l = 0,
    r = s.length - 1
  if (s.length === 1) {
    console.log('a')
  } else if (str === s) {
    while (s[l] === 'a' && l < r) {
      l++
      r--
    }
    s = s.substring(0, l) + 'a' + s.substring(l + 1)
    s = s.substring(0, r) + 'a' + s.substring(r + 1)
  } else {
    let cnt = 0,
      x = -1,
      y = -1,
      flag = 0
    while (l < r) {
      if (s[l] !== s[r]) {
        cnt++
        ;(x = l), (y = r)
        if (Math.min(s.charCodeAt(l), s.charCodeAt(r)) === 97) {
          flag = 1
        }
        s =
          s.substring(0, l) +
          String.fromCharCode(Math.min(s.charCodeAt(l), s.charCodeAt(r))) +
          s.substring(l + 1)
        s =
          s.substring(0, r) +
          String.fromCharCode(Math.min(s.charCodeAt(l), s.charCodeAt(r))) +
          s.substring(r + 1)
      }
      l++
      r--
    }
    if (flag && cnt === 1) {
      if (s.length & 1) {
        s = s.substring(0, s.length / 2) + 'a' + s.substring(s.length / 2 + 1)
      }
    } else if (cnt === 1) {
      s = s.substring(0, x) + 'a' + s.substring(x + 1)
      s = s.substring(0, y) + 'a' + s.substring(y + 1)
    }
  }
  console.log(s)
}
