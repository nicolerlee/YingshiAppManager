
const themeRootComponent = {
  pay66: { name: 'plane-payment', clz: 'pay66' },
  pay6: { name: 'pay6', clz: 'pay6' },
};

const themeSubComponent = {
  payBoard: { name: 'pay-board', clz: 'pb' },
};

const componentExtraInit = () => {
  Object.keys(themeRootComponent).forEach(key => {
    themeRootComponent[key].root = true;
  });
  Object.keys(themeSubComponent).forEach(key => {
    themeSubComponent[key].root = false;
  });
};

componentExtraInit();

const isRootComponentName = (name) => {
  const keys = Object.keys(themeRootComponent);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (themeRootComponent[key].name === name) return true;
  }
  return false;
};

const getSubComponentByName = (name) => {
  const keys = Object.keys(themeSubComponent);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (themeSubComponent[key].name === name) return themeSubComponent[key];
  }
  return { fake: true };
};

export default function () {
  return {
    rootComponents: () => themeRootComponent,
    subComponents: () => themeSubComponent,
    isRootComponentName,
    getSubComponentByName,
  };
}