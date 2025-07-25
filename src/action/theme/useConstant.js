
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


export default function () {
  return {
    rootComponents: () => themeRootComponent,
    subComponents: () => themeSubComponent,
  }
}