<template>
  <div class="ai-create-module">
    <el-card class="workflow-container">
      <template #header>
        <div class="header">
          <h3>创意小程序孵化器 - 创建向导</h3>
        </div>
      </template>
      <div class="workflow-content">
        <CustomSteps :active-step="currentStep" :steps="stepsData" @step-click="handleStepClick" />

        <!-- 步骤内容 -->
        <div class="step-panel">
          <!-- 步骤1: 配置基本信息 -->
          <div v-if="currentStep === 0">
            <AiCreateStep1
              v-model="basicInfoForm"
              :current-sub-step="currentSubStep"
              @update:current-sub-step="currentSubStep = $event"
              ref="basicInfoStepRef"
            />
          </div>

          <!-- 步骤2: 配置支付，广告信息 -->
          <div v-if="currentStep === 1">
            <AiCreateStep2
              v-model="step2ConfigForm"
              :platform="basicInfoForm.platform"
              :current-sub-step="currentSubStep"
              @update:current-sub-step="currentSubStep = $event"
              ref="aiCreateStep2Ref"
            />
          </div>

          <!-- 步骤3: 配置其他通用信息 -->
          <div v-if="currentStep === 2">
            <AiCreateStep3
              v-model="generalConfigForm"
              :platform="basicInfoForm.platform"
              ref="generalConfigFormRef"
            />
          </div>

          <!-- 步骤4: 主题 -->
          <div v-if="currentStep === 3">
            <AiCreateThemeStep
                :current-sub-step="currentSubStep"
                @update:current-sub-step="currentSubStep = $event"
                ref="themeFormRef"/>
          </div>

          <!-- 步骤4: 展示配置数据并确认 -->
          <div v-if="currentStep === 4">
            <AiCreateStep4
              :basicInfoForm="basicInfoForm"
              :microConfigForm="step2ConfigForm.microConfig"
              :paymentConfigForm="step2ConfigForm.paymentConfig"
              :adConfigForm="step2ConfigForm.adConfig"
              :generalConfigForm="generalConfigForm"
              @reset-wizard="resetWizard"
              ref="aiCreateStep4Ref"
            />
          </div>
        </div>

        <!-- 导航按钮 -->
        <div class="step-actions">
          <el-button v-if="currentStep > 0 || currentSubStep > 0 && currentStep !== 4" @click="prevStep">上一步</el-button>
          <el-button v-if="currentStep < 4" type="primary" @click="nextStep">下一步</el-button>
          <el-button v-if="currentStep === 4" type="primary" @click="startGeneration">确认无误，开始生成小程序</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import CustomSteps from '../components/common/CustomSteps.vue'
import AiCreateStep1 from '../components/aiCreate/AiCreateStep1.vue'
import AiCreateStep3 from '../components/aiCreate/AiCreateStep3.vue'
import AiCreateStep4 from '../components/aiCreate/AiCreateStep4.vue'
import AiCreateStep2 from '../components/aiCreate/AiCreateStep2.vue'
import AiCreateThemeStep from '../components/aiCreate/AiCreateThemeStep.vue'
import { useRouter } from 'vue-router'
import { useAppGenerationStore } from '../stores/appGenerationStore'
import request from '../utils/request'
import useData from "@/action/aiCreate/useData/index.js";
import appConfig from "@/appConfig/index.js";

const router = useRouter()
const currentStep = ref(0)
const currentSubStep = ref(0)
const appGenerationStore = useAppGenerationStore()

// 表单引用
const basicInfoStepRef = ref(null)
const generalConfigFormRef = ref(null)
const aiCreateStep2Ref = ref(null)
const themeFormRef = ref(null)

const step2ConfigForm = useData().step2ConfigForm;

const stepsData = ref([
  {
    title: '基本信息',
    description: '配置小程序名称、简介及主题色'
  },
  {
    title: '微距，支付与广告',
    description: '设置微距，支付和广告相关配置'
  },
  {
    title: '其他通用信息',
    description: '配置其他通用设置'
  },
  {
    title: '样式主题',
    description: '配置样式主题设置'
  },
  {
    title: '展示配置数据并确认',
    description: '核对所有配置数据并完成创建'
  }
]);

const handleStepClick = (index) => {
  currentStep.value = index;
  currentSubStep.value = 0;
}

// 表单数据模型
const basicInfoForm = useData().basicInfoForm;

const generalConfigForm = useData().generalConfigForm;

const resetWizard = () => {
  currentStep.value = 0;
  currentSubStep.value = 0;
  basicInfoStepRef.value?.resetFields();
  aiCreateStep2Ref.value?.resetFields();
  generalConfigFormRef.value?.resetFields();
  themeFormRef.value.resetVars();
};

// 导航函数
const nextStep = async () => {
  // 步骤1的校验
  if (currentStep.value === 0) {
    if (currentSubStep.value === 0) {
      const valid = await basicInfoStepRef.value.validate().catch(() => false);
      if (!valid) {
        ElMessage.error('Please fill in the complete "Basic Info"');
        appConfig.brand = ''; appConfig.brandName = '';
        return;
      }
      appConfig.brand = basicInfoForm.value.product;
      appConfig.brandName = basicInfoForm.value.appName;
      currentSubStep.value = 1;
      return;
    } else if (currentSubStep.value === 1) {
      if (!basicInfoForm.value.mainTheme || !basicInfoForm.value.secondTheme) {
        ElMessage.error('还未确定小程序的主题色哦！');
        return;
      }
    }
  } else if (currentStep.value === 1) {
    // 步骤2的子步骤校验
    if (currentSubStep.value === 0) {
      const valid = await aiCreateStep2Ref.value.validate().catch(() => false);
      if (!valid) {
        ElMessage.error('请填写完整的"微距配置"！');
        return;
      }
      currentSubStep.value++;
      return;
    } else if (currentSubStep.value === 1) {
      const valid = await aiCreateStep2Ref.value.validate().catch(() => false);
      if (!valid) {
        ElMessage.error('请填写完整的"支付配置"！');
        return;
      }
      
      const hasEnabledPayment = Object.values(step2ConfigForm.value.paymentConfig).some(payment => 
        payment.enabled && 
        ((payment.gatewayAndroid && payment.gatewayIos) || 
         (basicInfoForm.value.platform === '抖音' && payment === step2ConfigForm.value.paymentConfig.douzuanPay) ||
         (basicInfoForm.value.platform === '微信' && payment === step2ConfigForm.value.paymentConfig.wxVirtualPay))
      );
      
      if (!hasEnabledPayment) {
        ElMessage.error('请至少启用并配置一种支付方式！');
        return;
      }
      
      currentSubStep.value++;
      return;
    } else if (currentSubStep.value === 2) {
      const valid = await aiCreateStep2Ref.value.validate().catch(() => false);
      if (!valid) {
        ElMessage.error('请填写完整的"广告配置"！');
        return;
      }
      
      const hasEnabledAd = Object.values(step2ConfigForm.value.adConfig).some(ad => 
        ad.enabled && 
        ((ad.rewardAdId && ad.rewardCount > 0) || 
         (ad.interstitialAdId && ad.interstitialCount > 0) ||
         ad.nativeAdId)
      );
      
      if (!hasEnabledAd) {
        ElMessage.error('请至少启用并配置一种广告类型！');
        return;
      }
    }
  } else if (currentStep.value === 2) {
    const valid = await generalConfigFormRef.value.validate().catch(() => false);
    if (!valid) {
      ElMessage.error('请填写完整的"其他通用信息"！');
      return;
    }
    currentStep.value++;
    currentSubStep.value = 0;
    return;
  } else if (currentStep.value === 3) {
    const valid = await themeFormRef.value.validate().catch(() => false);
    if (!valid) {
      ElMessage.error('Please choose one theme"');
      return;
    }
  }

  if (currentStep.value < stepsData.value.length - 1) {
    currentStep.value++;
    currentSubStep.value = 0;
  }
};

const prevStep = () => {
  if (currentStep.value === 0) {
    if (currentSubStep.value === 1) {
      currentSubStep.value = 0;
      return;
    }
  } else if (currentStep.value === 1) {
    if (currentSubStep.value > 0) {
      currentSubStep.value--;
      return;
    } else if (currentSubStep.value === 0) {
      currentStep.value--;
      currentSubStep.value = 1;
      return;
    }
  } else if (currentStep.value === 2) {
    currentStep.value--;
    currentSubStep.value = 2;
    return;
  } else if (currentStep.value === 3) {
    currentStep.value--;
    currentSubStep.value = 0;
    return;
  } else if (currentStep.value === 4) {
    currentStep.value--;
    currentSubStep.value = 0;
    return;
  }

  if (currentStep.value > 0) {
    currentStep.value--;
    currentSubStep.value = 0;
  }
};

const startGeneration = async () => {
  let themeSubmitData = useData().buildThemeConfigSubmitParam();
  console.error('asasasasa>', 'buildThemeConfigSubmitParam', themeSubmitData);
  // 收集所有配置数据
  const params = {
    baseConfig: basicInfoForm.value,
    deliverConfig: step2ConfigForm.value.microConfig,
    paymentConfig: step2ConfigForm.value.paymentConfig,
    adConfig: step2ConfigForm.value.adConfig,
    commonConfig: generalConfigForm.value,
    themeConfig: themeSubmitData,
  };

  try {
    const res = await request.post('/api/novel-create/createNovelApp', params);
    if (!res || res.code !== 200 || !res.data?.taskId) {
      ElMessage.error(res.message || '创建任务失败');
      appConfig.brand = ''; appConfig.brandName = '';
      return;
    }
    // 将配置数据存储到 Pinia store（如后续页面还需用到）
    // appGenerationStore.setConfigData(configData);
    // 跳转到生成模块，并带上taskId
    router.push({
      name: 'generate-app',
      query: { taskId: res.data.taskId }
    });
  } catch (e) {
    // ElMessage.error(e.message || '请求失败');
  }
};
</script>

<style scoped>
.ai-create-module {
  padding: 20px;
}

.workflow-container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.workflow-content {
  padding: 20px;
}

.step-panel {
  padding: 20px 0;
  min-height: 250px;
}

.step-actions {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style> 