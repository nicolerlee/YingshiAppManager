import {reactive, ref} from "vue";

const themeForm = reactive({
  pay66: {
    chosen: false,
  },
  pay6: {
    chosen: false,
  }
});

// 表单数据模型
const basicInfoForm = ref({
  appName: '',
  platform: '',
  version: '',
  appCode: '',
  product: '',
  customer: '',
  appid: '',
  token_id: null,
  cl: '',
  mainTheme: '',
  secondTheme: '',
})

const step2ConfigForm = ref({
  microConfig: { deliverId: '', bannerId: '' },
  paymentConfig: {
    normalPay: { enabled: false, gatewayAndroid: '', gatewayIos: '' },
    orderPay: { enabled: false, gatewayAndroid: '', gatewayIos: '' },
    renewPay: { enabled: false, gatewayAndroid: '', gatewayIos: '' },
    douzuanPay: { enabled: false, gatewayAndroid: '', gatewayIos: '' },
    wxVirtualPay: { enabled: false, gatewayAndroid: '', gatewayIos: '' },
  },
  adConfig: {
    rewardAd: { enabled: false, rewardAdId: '', rewardCount: null },
    interstitialAd: { enabled: false, interstitialAdId: '', interstitialCount: null },
    nativeAd: { enabled: false, nativeAdId: '' },
  },
});

const generalConfigForm = ref({
  contact: '',
  payCardStyle: null,
  homeCardStyle: null,
  buildCode: '',
  mineLoginType: 'anonymousLogin',
  readerLoginType: 'anonymousLogin',
  douyinImId: '',
  douyinAppToken: '',
  weixinAppToken: '',
  kuaishouClientId: '',
  kuaishouClientSecret: '',
  kuaishouAppToken: '',
  iaaMode: false,
})

const buildThemeConfigSubmitParam = () => {
  const roots = [];
  Object.keys(themeForm).forEach(key => {
    const component = themeForm[key];
    roots.push({ node: component.node, version: component.version });
  })
  return roots;
}

export default function () {
  return {
    themeForm, basicInfoForm, step2ConfigForm,
    generalConfigForm,
    buildThemeConfigSubmitParam
  }
}