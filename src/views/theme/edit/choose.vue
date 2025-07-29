<template>
  <Use :root="args.root" mode="applied"/>
  <el-button type="primary" @click="applyTheme">应用</el-button>
</template>

<script setup>
import {computed, watch} from "vue";
import Use from "@/views/theme/use/index.vue";
import webDataConfig from "@/action/theme/webData/webDataConfig.js";
import themeRequest from "@/action/theme/webData/themeRequest.js";
import useData from "@/action/theme/useData/index.js";
import action from "@/action/theme/webData/action.js";
import appConfig from "@/appConfig/index.js";

const tag = "choose>";

const props = defineProps({
  choose: { type: String, required: true },
});

const args = computed(() => {
  return {
    root: webDataConfig[props.choose],
  }
});

watch(() => props.choose, (newVal, oldVal) => {
  console.log(`${tag} choose 发生变化，旧值: ${oldVal}，新值: ${newVal}`);
  // 在这里可以添加其他逻辑
})

const applyTheme = async () => {
  const selected = useData().getData(args.value.root);
  const config = useData().getConfig(args.value.root).items[selected.sel];
  console.log('applyRootPreset', args.value.root, selected.sel, 'config', config);
  action.tellApplyRootPreset(appConfig.brand, args.value.root.sourceNode, config.version);
}

</script>

<style scoped>

</style>