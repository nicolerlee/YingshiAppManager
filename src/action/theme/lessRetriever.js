import useConstant from "./useConstant";
import {waitAsync} from "../../utils/common";
import webData from './webData'
import themeRequest from "./webData/themeRequest";

const tag = 'lessRetriever>';

const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();

const lessRetriever = {
  async performDownloadRootLess(component, itemConfig) {
    const dataMap = webData(); const { style } = itemConfig;
    const rootData = dataMap[component.clz];
    const componentData = rootData.root;
    if (!componentData) {
      console.error(tag, component, '不识别组件!!');
      return '';
    }
    componentData[`s${style}`] = await themeRequest().getRootLess(component, style);
    return componentData[`s${style}`];
  },
  async performDownloadSubComponentLess(root, component, itemConfig) {
    console.log(tag, `[sub] to download payboard${itemConfig.id}-${itemConfig.style} in ${root.name} finished`, itemConfig);
    //await waitAsync(1000);
    const { id, style } = itemConfig;
    const dataMap = webData();
    const rootData = dataMap[root.clz];
    const itemKey = `${component.name}`;
    const componentData = rootData[itemKey];
    if (!componentData) {
      console.error(tag, component, '不识别子组件!!');
      return '';
    }
    if (!componentData[`v${id}`]) componentData[`v${id}`] = {};
    const versionData = componentData[`v${id}`];
    versionData[`s${style}`] = await themeRequest().getSubLess(root, component, itemConfig);
    console.log(tag, `[sub] download ${component.name} ${itemConfig.id}-${itemConfig.style} in ${root.name} finished`, itemConfig);
    return versionData[`s${style}`] || '';
  },
  downloadPrepare(component, config) {
    const { name } = component;
    if (!(config && config[name])) {
      console.error(tag, component, '组件未配置!!', config); return false;
    }
    const verifyTheme = config[name];
    if (!(verifyTheme.style && verifyTheme.id)) {
      config[name] = { "style" : "1", "id" : "1" }; // 附默认兜底;
    }
    return true;
  },
  async downloadComponentLess(root, component, config) {
    if (!this.downloadPrepare(component, config)) return '';
    if (component.root) return await this.downloadRootComponentLess(component, config);
    return await this.downloadSubComponentLess(root, component, config);
  },
  async downloadRootComponentLess(component, config) {
    const { name } = component;
    if (!component.root) {
      console.error(tag, '子组件不走root下载less'); return;
    }
    return await this.performDownloadRootLess(component, config[name]);
  },
  async downloadSubComponentLess(root, component, config) {
    if (!root || !root.root) {
      console.error(tag, 'downloadSubComponentLess root参数为空'); return '';
    }
    const { name } = component;
    if (!this.downloadPrepare(component, config)) return '';
    return await this.performDownloadSubComponentLess(root, component, config[name]);
  },
};

export default lessRetriever;