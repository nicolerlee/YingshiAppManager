<template>
<div>
  <div v-for="(item, index) in data.items">
    <div v-if="currentSubStep === index">
      <h4>步骤{{currentSubStep + 1}}: 配置{{item}}</h4>
      <Use :root="args.root" mode="preset" @event="useEvent" />
    </div>
  </div>
</div>
</template>

<script setup>

import useData from "@/action/aiCreate/useData/index.js";
import useThemeData from "@/action/theme/useData/index.js";
import {computed, reactive, watch} from "vue";
import Use from "@/views/theme/use/index.vue";
import appConfig from "@/appConfig/index.js";
import webDataConfig from "@/action/theme/webData/webDataConfig.js";

const tag = 'theme-step>';


const { themeForm, basicInfoForm } = useData();
appConfig.brand = basicInfoForm.value.product;

const data = reactive({
  items: ['pay6', 'pay66'],
})

const props = defineProps({
  currentSubStep: { type: Number, required: true }
});

console.log('Themestep, currentSubStep', props.currentSubStep);

const args = computed(() => {
  return {
    root: webDataConfig[data.items[props.currentSubStep]],
  }
});

const useEvent = (event, d) => {
  console.log(tag, 'useEvent', event, d.value);
  if (event === 'selected') {
    console.log(tag, 'selected', d.value.sel);
    themeForm[data.items[props.currentSubStep]].version = d.value.sel + 1;
    themeForm[data.items[props.currentSubStep]].brand = appConfig.brand;
    themeForm[data.items[props.currentSubStep]].node = args.value.root.sourceNode;
    themeForm[data.items[props.currentSubStep]].chosen = true;
  }
}

const validate = async () => {
  return true;
};

const hasNext = () => {
  return props.currentSubStep < data.items.length - 1;
};

const resetVars = () => {
  useThemeData().reset();
}
defineExpose({ validate, resetVars, hasNext });
</script>


<style scoped>
.narrow-form-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>