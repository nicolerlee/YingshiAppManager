import useConstant from "./useConstant";
import webData from './webData'
import {waitAsync} from "../../utils/common";
import themeRequest from "./webData/themeRequest";

const tag = 'configRetriever>';

const configRetriever = {
  async downloadPreConfigs(component) {
    console.log(tag, 'downloadConfig', component);
    if (!component.root) {
      console.error(tag, '子组件不下载config.json!!'); return [];
    }
    const dataMap = webData();
    const rootData = dataMap[component.clz];
    rootData.config = await themeRequest().getPreConfigs(component);
    return rootData.config;
  },
  async downloadAppliedConfigs(component) {
    console.log(tag, 'downloadConfig', component);
    if (!component.root) {
      console.error(tag, '子组件不下载config.json!!'); return [];
    }
    const dataMap = webData();
    const rootData = dataMap[component.clz];
    rootData.config = await themeRequest().getAppliedConfigs(component);
    return rootData.config;
  }
};

export default configRetriever;