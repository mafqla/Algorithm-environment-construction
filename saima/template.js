var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line



let arr = []
var solveMeFirst = (a, b) => a + b
while ((line = read_line()) != '') {
  arr.push(line.split(' ').map(v => parseInt(v)))

  // let arr = line.split(' ')
  // let a = parseInt(arr[0])
  // let b = parseInt(arr[1])
  // let c = solveMeFirst(a, b)
  // console.log(c)

}
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j], ' ')
  }
  console.log()
}