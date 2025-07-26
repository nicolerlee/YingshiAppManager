import root from './root';

const updateConfig = (component, config) => {
  if (!component.root) return;
  const { clz } = component;
  const rootData = root()[clz];
  rootData.config.items = config;
};

const getData = (component) => {
  if (!component.root) return;
  const { clz } = component;
  const rootData = root()[clz];
  return rootData.data;
};

const getConfig = (component) => {
  if (!component.root) return;
  const { clz } = component;
  const rootData = root()[clz];
  return rootData.config;
};


export default function () {
  return {
    updateConfig,
    getData,
    getConfig,
  }
}