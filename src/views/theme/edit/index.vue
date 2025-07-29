<template>
  <el-container style="height: 100%; min-height: 400px;">
    <el-aside width="180px">
      <el-menu :default-active="activeMenu" @select="handleMenuSelect" class="el-menu-vertical">
        <el-menu-item index="pay6">
          业务6
          <template v-if="activeMenu === 'pay6'">
            <el-icon style="margin-left: 8px;"><Paperclip /></el-icon>
          </template>
        </el-menu-item>
        <el-menu-item index="pay66">
          业务66
          <template v-if="activeMenu === 'pay66'">
            <el-icon style="margin-left: 8px;"><Paperclip /></el-icon>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <choose :choose="activeMenu"></choose>
    </el-main>
  </el-container>
</template>

<script setup>
import {ref, computed, reactive} from 'vue'
import { Paperclip } from '@element-plus/icons-vue'
import choose from './choose.vue'
import appConfig from "@/appConfig/index.js";

appConfig.brand = 'fun';

const activeMenu = ref('pay66');

function handleMenuSelect(index) {
  activeMenu.value = index
}
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