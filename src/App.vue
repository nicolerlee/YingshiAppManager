<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo-container">
        <img src="/images/logo/wenqu_logo.png" class="logo-image">
      </div>
      <el-menu
        :router="true"
        default-active="/apps"
        class="el-menu-vertical"
        background-color="#eef1f3"
        text-color="#333"
      >
        <el-menu-item index="/apps">
          <el-icon><Platform /></el-icon>
          <span>小程序列表</span>
        </el-menu-item>

        <el-menu-item index="/config">
          <el-icon><Setting /></el-icon>
          <span>微距(for测试同学)</span>
        </el-menu-item>

        <el-menu-item index="/ads">
          <el-icon><Picture /></el-icon>
          <span>广告</span>
        </el-menu-item>

        <el-menu-item index="/payment">
          <el-icon><Money /></el-icon>
          <span>支付</span>
        </el-menu-item>
        <el-sub-menu index="/pay-style">
          <template #title>
            <el-icon><MagicStick /></el-icon>
            <span>编辑样式</span>
          </template>
          <el-menu-item index="/pay-style/pay">
            <el-icon><Money /></el-icon>
            支付样式
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/general-config">
          <el-icon><Tools /></el-icon>
          <span>通用配置</span>
        </el-menu-item>

        <el-menu-item index="/ai-plus">
          <el-icon><Monitor /></el-icon>
          <span>AI+</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="header-content">
          <h2>文曲-小说小程序创作中心</h2>
          <!-- <h4>让需求流动更简单</h4> -->
          <div class="horizontal right-header">
            <el-dropdown>
            <span class="admin-info">
              管理员 <el-icon><ArrowDown /></el-icon>
            </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Platform, Setting, Picture, Money, Tools, ArrowDown, Monitor, MagicStick } from '@element-plus/icons-vue'

import appConfig from "@/appConfig/index.js";
import {computed, reactive} from "vue";

</script>

<style lang="less">
@import "./common.less";
&::-webkit-scrollbar {
  display: block !important;
  height: 12px !important;
  -webkit-appearance: none;
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,.5) !important;
  border-radius: 6px !important;
}

&::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
}
.el-container {
  height: 100vh;
}

.el-aside {
  background-color: #eef1f3;
}

.logo-container {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #dcdfe6;
}

.logo-image {
  height: 50px;
  border-radius: 12px;
  object-fit: contain;
}

.el-menu {
  border-right: none;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.admin-info {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.el-menu-vertical {
  height: 100%;
}

.el-menu-vertical .el-menu-item {
  color: #333; /* Default text color */
}

.el-menu-vertical .el-menu-item:hover {
  background-color: #e0e3e6; /* Subtle hover effect */
}

.el-menu-vertical .el-menu-item.is-active {
  background-color: #d3dce6; /* Active background */
  color: #409eff; /* Active text color */
  border-left: 3px solid #409eff; /* Active indicator */
}
.pw { width: 250px; }
.ph { width: 400px; }
.pay66 { width: 250px; height: 400px; position: relative; overflow-y: scroll; }
.pay6 { width: 250px; height: 400px; position: relative; overflow-y: scroll; }
</style> 