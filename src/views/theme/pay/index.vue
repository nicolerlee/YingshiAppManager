<template>
  <el-container style="height: 100%; min-height: 400px;">
    <el-aside width="180px">
      <el-menu :default-active="activeMenu" @select="handleMenuSelect" class="el-menu-vertical">
        <el-menu-item index="biz6">
          业务6
          <template v-if="activeMenu === 'biz6'">
            <el-icon style="margin-left: 8px;"><Paperclip /></el-icon>
          </template>
        </el-menu-item>
        <el-menu-item index="biz66">
          业务66
          <template v-if="activeMenu === 'biz66'">
            <el-icon style="margin-left: 8px;"><Paperclip /></el-icon>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <component :is="activeMenuComponent" :root="args.root"/>
    </el-main>
  </el-container>
</template>

<script setup>
import {ref, computed, reactive} from 'vue'
import { Paperclip } from '@element-plus/icons-vue'
import Pay6 from './pay6/index.vue'
import use from '../use/index.vue'
import useThemeData from "../../../action/theme/useThemeData";
import useConstant from "../../../action/theme/useConstant";

const { action } = useThemeData();
const rootComponents = useConstant().rootComponents();

const activeMenu = ref('biz6')

function handleMenuSelect(index) {
  activeMenu.value = index
}

const args = computed(() => {
  return {
    root: rootComponents.pay66,
  }
});

const activeMenuComponent = computed(() => {
  if (activeMenu.value === 'biz6') return Pay6
  if (activeMenu.value === 'biz66') return use
  return null
})
</script>

<style scoped>
.el-container {
  background: #f8f9fb;
}
.el-aside {
  background: #fff;
  border-right: 1px solid #e4e7ed;
  padding-top: 20px;
}
.el-menu-vertical {
  border-right: none;
}
.el-main {
  padding: 32px 24px;
  background: #fff;
  min-height: 400px;
}
</style> 