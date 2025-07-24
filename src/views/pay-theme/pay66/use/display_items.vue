<template>
  <div class="horizontal display_container">
    <div class="horizontal" v-for="(theme, index) in moduleStyles" :key="index">
      <div class="display_item" :class="{ sel: index == moduleData.sel }" @click="themeModule66.data.sel = index">
        <Pay :theme="theme" :tid="index"></Pay>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pay from "../index.vue";
import useThemeData from "../../../../action/theme/useThemeData";
import {computed} from "vue";

const { themeModule66, action } = useThemeData();
// 使用 computed 来访问响应式数据
const moduleData = computed(() => themeModule66.data);
const moduleStyles = computed(() => action.getStyles());

</script>

<style scoped lang="less">
.display_container {
  overflow-x: scroll;

  .display_item {
    margin: 0 10px; border-radius: 2px; padding: 5px;
  }
  .display_item.sel {
    border: solid 2px red;
  }
}
</style>
