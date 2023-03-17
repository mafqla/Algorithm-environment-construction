var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt
var line

const match = (manNum, womanNum, songNum) => {
  const manArr = new Array(manNum)
  const womanArr = new Array(womanNum)
  let w = 0
  let m = 0

  for (let i = 1; i <= manNum; i++) {
    manArr[i - 1] = i
  }
  for (let i = 1; i <= womanNum; i++) {
    womanArr[i - 1] = i
  }
  for (let i = 0; i < songNum; i++) {
    console.log(`${manArr[m]} ${womanArr[w]}`)
    m++
    w++
    if (m === manNum && m < songNum) {
      m = 0
    }
    if (w === womanNum && w < songNum) {
      w = 0
    }
  }
}

console.log('请输入男女两队的人数：')
while ((line = read_line())) {
  const manNum = parseInt(line.split(' ')[0])
  const womanNum = parseInt(line.split(' ')[1])

  console.log('请输入舞曲数目：')
  const songNum = parseInt(read_line())

  const result = match(manNum, womanNum, songNum)
  console.log(result)
}
