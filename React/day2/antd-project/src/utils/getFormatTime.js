function getNowFormatDate(microtime) {
  var date = new Date(microtime)
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var strHour = date.getHours()
  var strMinute = date.getMinutes()
  var strSeconds = date.getSeconds()
  if (month >= 1 && month <= 9) {
    month = `0${month}`
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = `0${strDate}`
  }
  if (strHour >= 0 && strHour <= 9) {
    strHour = `0${strHour}`
  }
  if (strMinute >= 0 && strMinute <= 9) {
    strMinute = `0${strMinute}`
  }
  if (strSeconds >= 0 && strSeconds <= 9) {
    strSeconds = `0${strSeconds}`
  }
  var currentdate = `${date.getFullYear()}-${month}-${strDate} ${strHour}:${strMinute}:${strSeconds}`
  return currentdate
}

export default getNowFormatDate
