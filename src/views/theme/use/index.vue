<template>
  <div class="vertical">
    <display-items :configs="configs" :root="root" :mode="mode"></display-items>
  </div>
</template>

<script setup>
import DisplayItems from "./display_items.vue";
import {computed, onMounted, reactive, watch} from "vue";
import action from "@/action/theme/webData/action.js";
import useData from "@/action/theme/useData/index.js";

const tag = 'use>';

const props = defineProps({
  root: { type: Object, required: true },
  mode: { type: String, default: "preset" },
});

console.log(tag, 'root', props.root);

const configs = computed(() => useData().getConfig(props.root).items);
const data = computed(() => useData().getData(props.root));
const emit = defineEmits(['event']);

const prepareConfig = async () => {
  // 先下载config.json
  if (props.mode === "preset") {
    await action.applyPreThemeConfig(props.root);
  } else {
    await action.applyAppliedThemeConfig(props.root);
  }
  // 再下载子组件less， root组件(pay6/pay66)的less在对应的组件中触发下载
  const tempConfigs = useData().getConfig(props.root).items;
  console.log(tag, 'tempConfigs', tempConfigs)
  emit('event', 'selected', data);
};

// 监听 data.sel 的变化，初始值也触发回调
watch(
    () => data.value.sel,
    (newVal, oldVal) => {
      console.log(`${tag} data.sel 发生变化，旧值: ${oldVal}，新值: ${newVal}`);
      // 在这里可以添加其他逻辑
      emit('event', 'selected', data);
    },
);

// 浅监听 root 对象引用的变化
watch(
    () => props.root,
    (newVal, oldVal) => {
      console.log(`${tag} root 发生变化，旧值: `, oldVal, `，新值: `, newVal);
      // 在这里可以添加其他逻辑
      prepareConfig(); // 当 root 变化时重新准备配置
    },
);

onMounted(async () => {
  console.log(tag, 'onMounted');
  prepareConfig();
});

</script>

<style scoped>
.submit_button {
  width: 100px; margin-top: 20px;
}
</style>