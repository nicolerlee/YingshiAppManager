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

  // 应用组件的样式， themeobj 为组件主题对象, tid为该组件的序号标识, tid的作用是生成唯一class 名
  async applyComponentLess(component, themeObj, tid) {
    const componentName = component.name;
    const defaultTheme = { "style" : "1", "id" : "1" }; // 默认
    let myTheme = defaultTheme; // 默认
    if (themeObj && themeObj[componentName]) myTheme = themeObj[componentName];
    if (!(myTheme.style && myTheme.id)) myTheme = defaultTheme;
    let lessCode = lessRetriever.downloadComponentLess(component, themeObj);
    lessCode = encloseLessClass(lessCode, `.${component.name}-v${tid}`);
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