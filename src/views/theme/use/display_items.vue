<template>
  <div class="horizontal display_container">
    <div class="horizontal" v-for="(config, index) in configs" :key="index">
      <el-card class="display_item" :class="{ sel: index == data.sel }" @click="data.sel = index">
        <Pay :config="config" :tid="index" :root="root"></Pay>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Pay from "../pay/pay66/index.vue";
import {computed} from "vue";
import useData from "../../../action/theme/useData";

// 使用 computed 来访问响应式数据
const data = computed(() => useData().getData(props.root));

const props = defineProps({
  configs: { type: Array, required: true },
  root: { type: Object, required: true },
});

</script>

<style scoped lang="less">
.display_container {
  overflow-x: scroll;

  .display_item {
    margin: 0 10px; border-radius: 2px; padding: 5px; border: solid 2px transparent;
  }
  .display_item.sel {
    border: solid 2px red;
  }
}
</style>
