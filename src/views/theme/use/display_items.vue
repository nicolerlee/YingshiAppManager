<template>
  <div class="horizontal display_container">
    <div class="horizontal" v-for="(config, index) in configs" :key="index">
      <el-card class="display_item" :class="{ sel: index == moduleData.sel }" @click="themeModule66.data.sel = index">
        <Pay :config="config" :tid="index"></Pay>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Pay from "../pay/pay66/index.vue";
import {computed} from "vue";
import useThemeData from "../../../action/theme/useThemeData";

const { themeModule66, action } = useThemeData();
// 使用 computed 来访问响应式数据
const moduleData = computed(() => themeModule66.data);

const props = defineProps({
  configs: { type: Array, required: true },
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
