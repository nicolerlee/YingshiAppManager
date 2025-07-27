import {reactive, ref} from "vue";

const themeForm = reactive({
  configItems: ['pay66'],
  pay66: {
    chosen: false,
    config: {
      "components" : {
        "pay-board" : {
          "style" : "3",
          "id" : "1"
        },
        "plane-payment": {
          "style" : "1",
          "id" : "1"
        }
      }
    }
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
  themeForm.configItems.forEach(key => {
    const components = [];
    const root = themeForm[key];
    const tempSubs = root.config.components;
    Object.keys(tempSubs).forEach(subkey => {
      const subValue = tempSubs[subkey];
      components.push({ name: subkey, id: subValue.id, style: subValue.style });
    })
    const item = { components, name: key };
    roots.push(item);
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