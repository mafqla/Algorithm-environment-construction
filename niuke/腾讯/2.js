//双向队列游戏
/**
 * 大Q有一个双向队列，
 * 大Q和小Q一起玩游戏，游戏一共有n轮，对于第i轮操作
 * 1.如果i是奇数，则大Q选择弹出队首元素或队尾元素
 * 2.如果i是偶数，则小Q选择弹出队首元素或队尾元素
 * 
 * 两人都是聪明人，他们都会选择弹出自己能够获得的最大值，
 */
/**
 * 输入描述:
 * 3
 * 1 2 3
 * 输出描述:
 * 3 1 2
 */
const readline = require('readline')

// let [a, b] = readline().split(' ').map(Number)

while ((line = readline())) {
  let lines = line.split(' ')
  let a = parseInt(lines[0])
  let b = parseInt(lines[1])

}