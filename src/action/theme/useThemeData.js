import {convertRpxToPx, encloseLessClass} from "../../utils/common";
import lessRetriever from "./lessRetriever";
import useData  from "./useData";
import configRetriever from "./configRetriever";

const tag = 'useThemeData>';

const { pay66 } = useData();
const themeModule66 = pay66;

const action = {
  getStyles() {
    return themeModule66.config.items;
  },
  getSelectedStyle() {
    return themeModule66.config.items[themeModule66.data.sel];
  },
  getStyleComponents() {
    const components = [];
    themeModule66.config.items.forEach((style) => {
      components.push(style.components || {});
    });
    return components;
  },
  applyLessCode(lessCode) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/less';
    styleElement.textContent = lessCode;
    document.head.appendChild(styleElement);
    // 手动触发 Less 编译
    window.less.sheets.push(styleElement.sheet);
    window.less.refreshStyles();
  },

  // 应用组件的样式， config 为组件主题对象, tid为该组件的序号标识, tid的作用是生成唯一class 名
  async applyComponentLess({ component, config, tid, root = {} }) {
    const { name, clz } = component; const rootClz = root.clz;
    const defaultConfig = { "style" : "1", "id" : "1" }; // 默认
    let myConfig = defaultConfig; // 默认
    if (config && config[name]) myConfig = config[name];
    if (!(myConfig.style && myConfig.id)) myConfig = defaultConfig;
    let lessCode = await lessRetriever.downloadComponentLess(root, component, config);
    let wrapperClz;
    if (component.root) wrapperClz = `.${clz}-v${tid}`;
    else wrapperClz = `.${rootClz}-${clz}-v${myConfig.id}${myConfig.style}`;
    lessCode = encloseLessClass(lessCode, wrapperClz);
    //console.error(tag, `${name}, myconfig`, myConfig, 'clzz', wrapperClz);
    lessCode = convertRpxToPx(lessCode || '');
    this.applyLessCode(lessCode);
  },
  async applyThemeConfig(component) {
    const configs = await configRetriever.downloadConfig(component);
    useData().updateConfig(component, configs);
  }
};

export default function () {
  return {
    themeModule66,
    action
  };
}