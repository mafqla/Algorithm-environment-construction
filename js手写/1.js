// 扁平化数组
// flat深度遍历

const arr = [1, [2, [3, 4]]]
const res = arr.flat(Infinity)
console.log(res)

// forEach扁平数组

const flatten = arr => {
  const res = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      //递归
      res.push(...flatten(item))
    } else {
      res.push(item)
    }
  })
}

// reduce扁平数组
const flattenByReduce = arr => {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flattenByReduce(cur) : cur)
  }, [])
}
// console.log(flattenByReduce(arr))
