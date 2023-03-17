
// 找到前k个数里面大于k的，再找到后面数组里面小于等于k的，两两进行交换即可，交换的次数即为两者之间的距离
let [n, k] = readline().split(' ').map(Number)
let arr = readline().split(' ').map(Number)
let t1 = [],
  t2 = []
for (let i = 0; i < k; i++) if (arr[i] > k) t1.push(i)
for (let j = k; j < n; j++) if (arr[j] <= k) t2.push(j)
let ans = 0
for (let idx = 0; idx < t1.length; idx++) ans += t2[idx] - t1[idx]

console.log(ans)
