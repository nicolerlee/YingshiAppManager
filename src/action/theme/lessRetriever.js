import mockData from "./mockData";
import useConstant from "./useConstant";

const tag = 'lessRetriever>';

const { mock66 } = mockData;
const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();

const lessRetriever = {
  downloadPlanePaymentLess(themeObj) {
    let lessCode = mock66.less.s4;
    if (themeObj.style == 1) {
      lessCode = mock66.less.s1;
    }
    if (themeObj.style == 2) {
      lessCode = mock66.less.s2;
    }
    if (themeObj.style == 3) {
      lessCode = mock66.less.s3;
    }
    return lessCode;
    //return encloseLessClass(lessCode, `.pay66v${tid}`);
  },
  downloadComponentLess(component, themeObj) {
    const componentName = component.name;
    if (themeObj && themeObj[componentName]) {
      const verifyTheme = themeObj[componentName];
      if (!(verifyTheme.style && verifyTheme.id)) {
        themeObj[componentName] = { "style" : "1", "id" : "1" }; // 附默认兜底;
      }
    } else {
      console.error(tag, component, '组件未配置!!'); return '';
    }
    if (component.root) {
      if (component.name == rootComponents.pay66.name) return this.downloadPlanePaymentLess(themeObj[componentName]);
    }
    console.error(tag, component, '不识别组件!!');
    return '';
  },
};

export default lessRetriever;