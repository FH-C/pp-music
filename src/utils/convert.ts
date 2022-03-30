const numberConvert = function (num: number) {
  if (num > 1e8) {
    return (num / 1e8).toFixed(1) + '亿'
  } else if (num > 1e4) {
    return Math.round(num / 1e4)+ '万'
  }
}

const timeConvert = function(second: number) {
  const hour = Math.floor(second / 3600) || 0
  const minute = Math.floor((second - hour * 3600) / 60) || 0
  const second1 = second - hour * 3600 - minute * 60 || 0
  return `${ hour ? ':' : '' }${ minute.toString().length > 1 ? minute: '0' + minute }:${ second1.toString().length >
     1 ? second1 : '0' + second1 }`
}

const dateConvert = function(timestamp: number, format: string) {
  let date = null
  if (timestamp < 1e12)  {
    date = new Date(timestamp * 1000)
  } else {
    date = new Date(timestamp)
  }
  const map: {[key: string]: number} = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in map) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1, RegExp.$1.length === 1 ? map[k].toString() : ('00' + map[k]).substr(('' + map[k]).length))
    }
  }
  return format
}

const lyricsConvert = function(lyrics: string) {
  const lines = lyrics.split('\n')
  const result: Array<object> = []
  lines.forEach(line => {
    if (!line) return
    const time = line.match(/\d{2}:\d{2}\.\d{2,3}/g)
    const content = line.replace(/\[.*\]/g, '')
    if (time) {
      time.forEach(t => {
        const timeArr = t.split(/[:\.]/)
        const timeNum = parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10) + parseFloat(timeArr[2]) / 1000
        result.push({
          time: timeNum,
          content,
        })
      })
    }
  })
  return result
}

export {
  numberConvert,
  timeConvert,
  dateConvert,
  lyricsConvert,
}
