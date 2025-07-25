import {reactive} from "vue";
import useConstant from "./useConstant";

const rootComponents = useConstant().rootComponents();

const pay66 = reactive({
  config: {
    items: [],
  },
  data: {
    sel: 0,
  }
});

const updateConfig = (component, config) => {
  if (!component.root) return;
  const { name } = component;
  if (name == rootComponents.pay66.name) pay66.config.items = config;
};

const getData = (component) => {
  if (!component.root) return;
  const { name } = component;
  if (name == rootComponents.pay66.name) return pay66.data;
};

const getConfig = (component) => {
  if (!component.root) return;
  const { name } = component;
  if (name == rootComponents.pay66.name) return pay66.config;
};


export default function () {
  return {
    pay66,
    updateConfig,
    getData,
    getConfig,
  }
}