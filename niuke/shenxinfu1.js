// 日期时间格式化

const test = '1660653659557 yyyy    MM    dd -HH:mm:ss'

// 把test分为两部分，一部分是时间戳，一部分是的字符串
const arr = test.split(' ')
const date = Number(arr[0])
const format = arr.slice(1, arr.length).join(' ')
console.log(arr)
console.log(date, format)

function formatDate(date, format) {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()
  const second = dateObj.getSeconds()
  // console.log(year, month, day, hour, minute, second)
  //正则匹配所有yyyy，则替换为年份
  format = format.replace(/yyyy/g, year)
  //正则匹配MM，则替换为月份，否则不替换
  format = format.replace(/MM/, month)
  //正则匹配dd，则替换为日期，否则不替换
  format = format.replace(/dd/, day)
  //正则匹配HH，则替换为小时，否则不替换
  format = format.replace(/HH/, hour)
  //正则匹配mm，则替换为分钟，否则不替换
  format = format.replace(/mm/, minute)
  //正则匹配ss，则替换为秒，否则不替换
  format = format.replace(/ss/, second)

  return format
}

console.log(formatDate(date, format))
