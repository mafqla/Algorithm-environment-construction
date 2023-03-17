// 找到winner
// 1.给客人分配唯一id(从0到n-1)，每当小明在播放音乐时，第k秒停止播放，那么第k秒的客人淘汰，下一秒继续播放，直到最后一个客人就是winner,返回他的id

while ((line = readline())) {
  var lines = line.split(' ')
  // 客人数量
  let n = Number(lines[0])
  // 每隔k秒停止播放
  let k = Number(lines[1])
  print(findWinner(n, k))
}

function findWinner(n, k) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  let index = 0
  while (arr.length > 1) {
    index = (index + k) % arr.length
    arr.splice(index, 1)
  }
  return arr[0]
}
