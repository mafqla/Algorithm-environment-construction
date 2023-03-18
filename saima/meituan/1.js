/**
 * 小美在玩一项游戏。该游戏的目标是尽可能抓获敌人。敌人的位置将被一个二维坐标(x, y)所描述。
 *  小美有一个全屏技能,该技能能一次性将若干敌人一次性捕获。
 *  捕获的敌人之间的横坐标的最大差值不能大于A,纵坐标的最大差值不能大于B。
 *  现在给出所有敌人的坐标,你的任务是计算小美一次性最多能使用技能捕获多少敌人。
 *
 *  输入描述
 *  第一行三个整数N,A.B、表示共有N个敌人，小美的全屏技能的参数A和参数B。
 *  接下来N行，每行两个数字x,y，描述一个敌人所在的坐标。1≤N≤500,1≤A,B≤1000,1≤x,y≤1000。
 *
 *  输出描述
 *  一行，一个整数表示小美使用技能单次所可以捕获的最多数量。
 */

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt

while ((line = read_line()) != '') {
  let [n, a, b] = line.split(' ').map(Number)
  let mx = -1
  let my = -1
  let mp = []
  for (let i = 1; i <= n; i++) {
    line = read_line()
    let [x, y] = line.split(' ').map(Number)
    mx = Math.max(mx, x + 1)
    my = Math.max(my, y + 1)
    if (mp[x] === undefined) {
      mp[x] = []
    }
    mp[x][y] = (mp[x][y] || 0) + 1
  }
  let pre = []
  for (let i = 1; i <= mx; i++) {
    pre[i] = []
    for (let j = 1; j <= my; j++) {
      pre[i][j] =
        (mp[i]?.[j] || 0) +
        (pre[i - 1]?.[j] || 0) +
        (pre[i]?.[j - 1] || 0) -
        (pre[i - 1]?.[j - 1] || 0)
    }
  }
  let res = -1
  for (let i = 1; i <= mx - a; i++) {
    for (let j = 1; j <= my - b; j++) {
      res = Math.max(
        res,
        pre[a + i]?.[b + j] ||
          0 - pre[a + i]?.[j - 1] ||
          0 - pre[i - 1]?.[b + j] ||
          0 + pre[i - 1]?.[j - 1] ||
          0
      )
    }
  }
  console.log(res)
}
