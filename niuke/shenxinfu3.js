//菜单展开
// 1到n-1表示对应栏目菜单项，第n个数字表示k，找到满足子栏目总数大于等于k的最少连续模块展开，如果找不到默认展开第一个

const str = '2 3 1 2 4 3 7'
const arr = str.split(' ')
console.log(arr)

function findMenu(arr) {
  const arr1 = arr.slice(0, arr.length - 1)
  console.log(arr1)
  const k = Number(arr1[arr1.length - 1])
  console.log(k)
  //遍历数组，找到满足子栏目总数大于等于k的最少连续模块展开，如果找不到默认展开第一个
  const index = []
  for (let i = 0; i < arr.length; i++) {
    //大于等于k，并且是连续的
    if (arr[i] >= k && arr[i + 1] >= k) {
      index.push(i)
    }
  }
  return index.join(' ')
}
console.log(findMenu(arr))
