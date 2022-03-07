const numberConvert = function (num: number) {
  if (num > 1e8) {
    return (num / 1e8).toFixed(1) + '亿'
  } else if (num > 1e4) {
    return Math.round(num / 1e4)+ '万'
  }
}

export {
  numberConvert,
}
