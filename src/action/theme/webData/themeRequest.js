import request from "../../../utils/request";

const urls = {
  getPreConfigs: '/api/theme/component/preconfigs',
  getAppliedConfig: '/api/theme/component/config',
  getRootLess: '/api/theme/component/less',
  getSubLess: '/api/theme/component/less/sub',
}


const getPreConfigs = async (component)  => {
  const res = await request.get(urls.getPreConfigs, {
    params: { brand: 'fun', name: component.clz }
  });
  console.log('getPreConfigs', res);
  if (res.code == 200 && res.data && res.data.length > 0) {
    return res.data;
  }
  return [];
};

const getAppliedConfigs = async (component)  => {
  const res = await request.get(urls.getAppliedConfig, {
    params: { brand: 'fun', name: component.clz }
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
    params: { brand: 'fun', name: component.clz, style }
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
    params: { brand: 'fun', root: root.clz, name: component.name, id, style }
  });
  console.log('getSubLess', component, config);
  if (res.code == 200 && res.data) {
    return res.data;
  }
  console.error('getSubLess failed', res);
  return '';
};


export default function () {
  return {
    getPreConfigs,
    getAppliedConfigs,
    getRootLess,
    getSubLess,
  }
}