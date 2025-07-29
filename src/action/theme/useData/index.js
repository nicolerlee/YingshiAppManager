import root from './root';

const updateConfig = (component, config) => {
  const { clz } = component;
  const rootData = root()[clz];
  rootData.config.items = config;
};

const getData = (component) => {
  const { clz } = component;
  const rootData = root()[clz];
  return rootData.data;
};

const getConfig = (component) => {
  const { clz } = component;
  const rootData = root()[clz];
  return rootData.config;
};

const reset = () => {
  Object.keys(root).forEach((key) => {
    root[key].reset();
  })
};


export default function () {
  return {
    updateConfig,
    getData,
    getConfig,
    reset
  }
}