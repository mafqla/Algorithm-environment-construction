// 实现一个函数，从树的根节点开始，返回按层级排序的元素列表。

// 输入
//                  2
//             8        9
//           1  3     4   5
// 输出
// [2,8,9,1,3,4,5]

function levelOrder(tree) {
  if (!tree) return []
  let result = []
  let queue = [tree]
  while (queue.length) {
    var node = queue.shift()
    result.push(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result
}

// 测试用例
let tree = {
  value: 2,
  left: {
    value: 8,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 9,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
}

console.log(levelOrder(tree))
