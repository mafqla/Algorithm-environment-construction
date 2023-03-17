// 编写一个函数接收携带小括号的字符串为参数，并且判断小括号的排列是否合规。如果字符串中的小括号排列合规便返回 true，否则返回 false。

// 例如：

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// 输入的字符串长度限制为 0 <= input.length <= 100。

// 除了「(」和「)」外输入的字符串也可以包含有效的 ASCII 字符。而且输入的字符串也可以为空，甚至根本不包含任何小括号，但其他形式的括号并不会被认为是小括号（比如 []、{}、<>）。

function isValid(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
    } else if (s[i] === ')') {
      if (stack.length === 0) return false
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isValid('(())((()())())'))


