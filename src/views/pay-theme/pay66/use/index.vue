<template>
  <div class="vertical">
    <display-items></display-items>
    <div class="vertical match_width align_center">
      <el-button class="submit_button" type="primary" @click="">提交{{moduleData.sel}}</el-button>
    </div>
  </div>
</template>

<script setup>
import DisplayItems from "./display_items.vue";
import useThemeData from "../../../../action/theme/useThemeData";
import {computed} from "vue";

const themeModule66 = useThemeData().themeModule66;
// 使用 computed 来访问响应式数据
const moduleData = computed(() => themeModule66.data);
const moduleConfig = computed(() => themeModule66.config);

</script>

<style scoped>
.submit_button {
  width: 100px; margin-top: 20px;
}
</style>