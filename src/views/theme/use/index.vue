<template>
  <div class="vertical">
    <display-items :configs="configs" :root="root"></display-items>
    <div class="vertical match_width align_center">
      <el-button class="submit_button" type="primary" @click="">提交{{data.sel}}</el-button>
    </div>
  </div>
</template>

<script setup>
import DisplayItems from "./display_items.vue";
import useThemeData from "../../../action/theme/useThemeData";
import useConstant from "../../../action/theme/useConstant";
import useData  from "../../../action/theme/useData";
import {computed, onMounted, reactive} from "vue";

const tag = 'use>';

const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();
const { action } = useThemeData();

const props = defineProps({
  root: { type: Object, required: true },
});

console.log(tag, 'root', props.root);

const configs = computed(() => useData().getConfig(props.root).items);
const data = computed(() => useData().getData(props.root));

onMounted(async () => {
  await action.applyThemeConfig(props.root);
  const tempConfigs = useData().getConfig(props.root).items;
  console.log(tag, 'tempConfigs', tempConfigs)
  for (let i = 0; i < tempConfigs.length; i++) {
    const tempConfig = tempConfigs[i];
    action.applyComponentLess({
      component: subComponents.payBoard, config: tempConfig.components, root: props.root
    });
  }

});

</script>

<style scoped>
.submit_button {
  width: 100px; margin-top: 20px;
}
</style>