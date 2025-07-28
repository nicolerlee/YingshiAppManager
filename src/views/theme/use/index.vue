<template>
  <div class="vertical">
    <display-items :configs="configs" :root="root"></display-items>
  </div>
</template>

<script setup>
import DisplayItems from "./display_items.vue";
import useThemeData from "../../../action/theme/useThemeData";
import useConstant from "../../../action/theme/useConstant";
import useData  from "../../../action/theme/useData";
import {computed, onMounted, reactive, watch} from "vue";

const tag = 'use>';

const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();
const { action } = useThemeData();

const props = defineProps({
  root: { type: Object, required: true },
  mode: { type: String, default: "preset" },
});

console.log(tag, 'root', props.root);

const configs = computed(() => useData().getConfig(props.root).items);
const data = computed(() => useData().getData(props.root));
const emit = defineEmits(['event']);

// 监听 data.sel 的变化，初始值也触发回调
watch(
    () => data.value.sel,
    (newVal, oldVal) => {
      console.log(`${tag} data.sel 发生变化，旧值: ${oldVal}，新值: ${newVal}`);
      // 在这里可以添加其他逻辑
      emit('event', 'selected', data);
    },
);

onMounted(async () => {
  // 先下载config.json
  if (props.mode == "preset") {
    await action.applyPreThemeConfig(props.root);
  } else {
    await action.applyAppliedThemeConfig(props.root);
  }
  // 再下载子组件less， root组件(pay6/pay66)的less在对应的组件中触发下载
  const tempConfigs = useData().getConfig(props.root).items;
  console.log(tag, 'tempConfigs', tempConfigs)
  // 遍历每一个root组件配置
  for (let i = 0; i < tempConfigs.length; i++) {
    const tempConfig = tempConfigs[i]; const config = tempConfig.components;
    Object.keys(config).forEach(name => {
      if (!useConstant().isRootComponentName(name)) {
        const component = useConstant().getSubComponentByName(name);
        if (component.fake) {
          console.error(tag, `无法下载less!!, don't support for component ${name}`);
        } else {
          action.applyComponentLess({ component, config, root: props.root });
        }
      }
    })
  }
  emit('event', 'selected', data);
});

</script>

<style scoped>
.submit_button {
  width: 100px; margin-top: 20px;
}
</style>