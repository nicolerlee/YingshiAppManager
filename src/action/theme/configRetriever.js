import useConstant from "./useConstant";
import mockData from "./mockData";
import {waitAsync} from "../../utils/common";

const tag = 'configRetriever>';

const rootComponents = useConstant().rootComponents();

const { mock66 } = mockData;

const configRetriever = {
  async downloadConfig(component) {
    console.log(tag, 'downloadConfig', component);
    if (!component.root) {
      console.error(tag, '子组件不下载config.json!!'); return [];
    }
    const { name } = component;
    if (name == rootComponents.pay66.name) {
      return mock66.config;
    }
    return [];
  }
};

export default configRetriever;