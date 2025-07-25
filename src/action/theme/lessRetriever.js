import useConstant from "./useConstant";
import {waitAsync} from "../../utils/common";
import webData from './webData'

const tag = 'lessRetriever>';

const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();

const { pay66 } = webData();

const lessRetriever = {
  downloadPlanePaymentLess(config) {
    let lessCode = pay66.less.s4;
    if (config.style == 1) {
      lessCode = pay66.less.s1;
    }
    if (config.style == 2) {
      lessCode = pay66.less.s2;
    }
    if (config.style == 3) {
      lessCode = pay66.less.s3;
    }
    return lessCode;
    //return encloseLessClass(lessCode, `.pay66v${tid}`);
  },
  async downloadPayBoardLess(root, itemConfig) {
    console.log(tag, '[sub] to download payboard in', root.name, itemConfig);
    //await waitAsync(1000);
    const rootName = root.name; const { id, style } = itemConfig;
    if (rootName == rootComponents.pay66.name) {
      if (id == 1) {
        if (style == 1) return pay66.payBoardV1.s1;
        if (style == 2) return pay66.payBoardV1.s2;
        if (style == 3) return pay66.payBoardV1.s3;
      }
    }
    return pay66.payBoardV1.s1;
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
    if (name == rootComponents.pay66.name) return await this.downloadPlanePaymentLess(config[name]);
    console.error(tag, component, '不识别组件!!');
    return '';
  },
  async downloadSubComponentLess(root, component, config) {
    if (!root || !root.root) {
      console.error(tag, 'downloadSubComponentLess root参数为空'); return '';
    }
    const { name } = component;
    if (!this.downloadPrepare(component, config)) return '';
    if (name == subComponents.payBoard.name) return await this.downloadPayBoardLess(root, config[name]);
    console.error(tag, component, '不识别子组件!!');
    return '';
  },
};

export default lessRetriever;