<template>
  <div class="horizontal display_container">
    <div class="horizontal" v-for="(config, index) in configs" :key="index">
      <el-card class="display_item" :class="{ sel: index == data.sel }" @click="data.sel = index">
        <component :is="payComponent" :config="config" :tid="index" :root="root" :mode="mode"></component>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Pay66 from "../pay/pay66/index.vue";
import Pay6 from "../pay/pay6/index.vue";
import {computed, watch} from "vue";
import useData from "../../../action/theme/useData";

// 使用 computed 来访问响应式数据
const data = computed(() => useData().getData(props.root));

const props = defineProps({
  configs: { type: Array, required: true },
  root: { type: Object, required: true },
  mode: { type: String, required: true },
});


const payComponent = computed(() => {
  if (props.root.name === 'pay6') return Pay6;
  return Pay66;
});


</script>

<style scoped lang="less">
.display_container {
  overflow-x: scroll;

  .display_item {
    margin: 0 10px; border-radius: 2px; padding: 5px; border: solid 2px transparent; background: #00000010;
  }
  .display_item.sel {
    border: solid 2px red;
  }
}
</style>
