
const themeRootComponent = {
  pay66: { name: 'plane-payment' },
  pay6: { name: 'pay-6' },
};

const themeSubComponent = {
  payBoard: { name: 'pay-board' },
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