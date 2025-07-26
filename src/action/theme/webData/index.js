import pay66 from "./pay66";

// 根组件的主题配置信息存储在以组件的key为名的js文件中，例如pay66.js, pay6.js

// 根组件的主题缓存文件的格式如下, 以pay66.js为例
/*
const pay66 = {
  config: [], // 存储config.json数组
  root: { // 根组件的样式信息
    s1: '', // 版本1
    s2: '', // 版本2
  },
  'pay-board': { // pay-board组件
    v1: { // 版本1
      s1: '', // 样式1
      s2: '', // 样式2
    }
  }
};
*/

export default function () {
  return {
    pay66,
  };
}