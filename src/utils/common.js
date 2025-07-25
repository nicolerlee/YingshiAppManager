const convertRpxToPx = (lessCode) => {
  // 简单的rpx到px转换 (假设1rpx = 0.5px)
  return lessCode.replace(/(\d+)rpx/g, (match, number) => {
    return (parseFloat(number) * 0.5 * 0.6) + 'px';
  });
}

const encloseLessClass = (lessCode, className) => `${className} { ${lessCode} }`;

const waitAsync = (timeout, timerObj, timerKey) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => { resolve(); if (timerObj && timerKey) timerObj[timerKey] = undefined; }, timeout);
    if (timerObj) { timerObj[timerKey] = timer; }
  });
}

export {
  convertRpxToPx,
  encloseLessClass,
  waitAsync
}