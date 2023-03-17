function findNum(arr) {
  // write code here
  // write code here
  var count = 0
  var res = 0
  for (var i = 0; i < arr.length; i++) {
    if (count == 0) {
      res = arr[i]
    }
    if (arr[i] == res) {
      count++
    } else {
      count--
    }
  }

  if (res <= arr.length / 2) {
    console.log(-1);
  } else {
      console.log(res)
  }
}

findNum([2,2,3,3])



