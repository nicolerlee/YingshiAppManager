<template>
<div>
  <div v-if="currentSubStep === 0" class="narrow-form-container">
    <h4>步骤1: 配置66</h4>
    <Use :root="rootComponent" @event="useEvent" mode="preset"/>
  </div>
</div>
</template>

<script setup>

import useData from "@/action/aiCreate/useData/index.js";
import useThemeData  from "@/action/theme/useData/index.js";
import useConstant from "@/action/theme/useConstant.js";
import {computed, reactive, watch} from "vue";
import Use from "@/views/theme/use/index.vue";
import appConfig from "@/appConfig/index.js";

const tag = 'theme-step>';

const { themeForm, basicInfoForm } = useData();
const rootComponents = useConstant().rootComponents();
appConfig.brand = 'fun';

const props = defineProps({
  currentSubStep: { type: Number, required: true }
});
const data = reactive({
  root: {
    pay66: rootComponents.pay66,
  },
});

const rootComponent = computed(() => {
  return props.currentSubStep == 0 ? data.root.pay66 : data.root.pay66;
})

const useEvent = (event, data) => {
  console.log(tag, 'useEvent', event, data.value);
  if (event == 'selected') {
    const config = useThemeData().getConfig(rootComponent.value);
    const selectedConfig = config.items[data.value.sel];
    const plainSelectedConfig = JSON.parse(JSON.stringify(selectedConfig));
    themeForm[rootComponent.value.clz].config = plainSelectedConfig;
    themeForm[rootComponent.value.clz].chosen = true;
    console.log(tag, 'selected', data.value.sel, 'selectedConfig', plainSelectedConfig);
  }
}

const validate = async () => {
  const rootChosen = themeForm[rootComponent.value.clz];
  if (!rootChosen.chosen) return false;
  return true;
};

const resetVars = () => {
}
defineExpose({ validate, resetVars });
</script>


<style scoped>
.narrow-form-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>