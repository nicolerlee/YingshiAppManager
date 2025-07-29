import request from "../../../utils/request";
import appConfig from "@/appConfig/index.js";

const urls = {
  getPreConfigs: '/api/theme/component/preconfigs',
  getAppliedConfig: '/api/theme/component/config',
  getRootLess: '/api/theme/component/less',
  getSubLess: '/api/theme/component/less/sub',

  applyRootPreset: '/api/theme/component/apply-root-preset',
  applySubPreset: '/api/theme/component/apply-sub-preset',
  getPresets: '/api/theme/component/presets',
}


const getPreConfigs = async (component)  => {
  const res = await request.get(urls.getPreConfigs, {
    params: { brand: appConfig.brand, name: component.clz }
  });
  console.log('getPreConfigs', res);
  if (res.code == 200 && res.data && res.data.length > 0) {
    return res.data;
  }
  return [];
};

const getAppliedConfigs = async (component)  => {
  const res = await request.get(urls.getAppliedConfig, {
    params: { brand: appConfig.brand, name: component.clz }
  });
  console.log('getAppliedConfigs', res);
  if (res.code == 200 && res.data && res.data) {
    return res.data;
  }
  return {};
};

//brand=fun&name=pay66&style=0
const getRootLess = async (component, style)  => {
  const res = await request.get(urls.getRootLess, {
    params: { brand: appConfig.brand, name: component.clz, style }
  });
  console.log('getRootLess', component, style);
  if (res.code == 200 && res.data) {
    return res.data;
  }
  console.error('getRootLess failed', res);
  return '';
};

//brand=fun&root=pay66&name=pay-board&id=3&style=3
const getSubLess = async (root, component, config)  => {
  const { style, id } = config;
  const res = await request.get(urls.getSubLess, {
    params: { brand: appConfig.brand, root: root.clz, name: component.name, id, style }
  });
  console.log('getSubLess', component, config);
  if (res.code == 200 && res.data) {
    return res.data;
  }
  console.error('getSubLess failed', res);
  return '';
};

const applyRootPreset = async (brand, node, version) => {
  const res = await request.get(urls.applyRootPreset, {
    params: { brand, node, version },
  });
  console.log('applyRootPreset', root, res);
  if (res.code === 200) {
    return res.data;
  }
  console.error('applyRootPreset failed', res);
  return '';
};

const applySubPreset = async (root, component) => {
  const res = await request.post(urls.applyRootPreset, {
    params: { brand: appConfig.brand, node: root.sourceNode, version: root.version }
  });
  console.log('applyRootPreset', root);
  if (res.code == 200) {
    return res.data;
  }
  console.error('applyRootPreset failed', res);
  return '';
};

const getPresets = async (brand, node, version) => {
  const res = await request.get(urls.getPresets, {
    params: { brand },
  });
  console.log('getPresets', root, res);
  if (res.code === 200) {
    return res.data;
  }
  console.error('getPresets failed', res);
  return '';
};


export default function () {
  return {
    getPreConfigs,
    getAppliedConfigs,
    getRootLess,
    getSubLess,
    applyRootPreset,
  }
}