import webData from "@/action/theme/webData/webData.js";
import useData from "@/action/theme/useData/index.js";
import themeRequest from "@/action/theme/webData/themeRequest.js";

const tag = 'webDataAction>';

const action = {
  async applyPreThemeConfig(rootNode) {
    console.log(tag, 'applyPreThemeConfig', rootNode);
    const items = webData[rootNode.name].preset;
    items.forEach((item, index) => { item.version = index + 1;});
    useData().updateConfig(rootNode, items);
  },
  async applyAppliedThemeConfig(rootNode) {
    console.log(tag, 'applyAppliedThemeConfig', rootNode);
    const items = [webData[rootNode.name].applied];
    useData().updateConfig(rootNode, items);
  },
  async getPreThemeConfig(rootNode) {
    console.log(tag, 'getPreThemeConfig', rootNode);
    const items = [webData[rootNode.name].applied];
    useData().updateConfig(rootNode, items);
  },
  async getAppliedThemeConfig(rootNode) {
    console.log(tag, 'applyThemeConfig', rootNode);
    const items = [webData[rootNode.name].applied];
    useData().updateConfig(rootNode, items);
  },

  tellApplyRootPreset(brand, node, version) {
    themeRequest().applyRootPreset(brand, node, version);
  }
}

export default action;