import useConstant from "./useConstant";
import webData from './webData'
import {waitAsync} from "../../utils/common";

const tag = 'configRetriever>';

const rootComponents = useConstant().rootComponents();

const { pay66 } = webData();

const configRetriever = {
  async downloadConfig(component) {
    console.log(tag, 'downloadConfig', component);
    if (!component.root) {
      console.error(tag, '子组件不下载config.json!!'); return [];
    }
    const { name } = component;
    if (name == rootComponents.pay66.name) {
      return pay66.config;
    }
    return [];
  }
};

export default configRetriever;