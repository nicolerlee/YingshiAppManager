function convertRpxToPx(lessCode) {
  // 简单的rpx到px转换 (假设1rpx = 0.5px)
  return lessCode.replace(/(\d+)rpx/g, (match, number) => {
    return (parseFloat(number) * 0.5 * 0.7) + 'px';
  });
}

export {
  convertRpxToPx
}