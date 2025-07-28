<template>
  <el-dialog v-model="dialogVisible" title="选取小程序">
    <el-list class="vertical-app-list">
      <el-list-item
          v-for="app in appList"
          :key="app.brand"
          @click="selectApp(app)"
          :style="{ cursor: 'pointer' }"
      >
        <el-radio
            v-model="selectedAppBrand"
            :label="app.brand"
        >
          <div>{{ `brand: ${app.brand}` }}</div>
          <div>{{ `brandName: ${app.brandName}` }}</div>
        </el-radio>
      </el-list-item>
    </el-list>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="confirmSelection">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import extra from '@/appConfig/extra.js'

// 定义 props
const props = defineProps({
  switchAppConfigData: {
    type: Object,
    required: true
  }
})

// 定义事件
const emit = defineEmits(['updateAppConfig'])

// 使用 extra 里的 apps 数据作为小程序列表
const appList = ref(extra.apps)

// 存储选中的小程序品牌标识
const selectedAppBrand = ref(null)

// 存储选中的小程序对象
const selectedApp = ref(null)

// 选择小程序
const selectApp = (app) => {
  selectedAppBrand.value = app.brand
  selectedApp.value = app
}

// 确认选择
const confirmSelection = () => {
  if (selectedApp.value) {
    console.log('选中的小程序:', selectedApp.value)
    // 触发事件，传递选中的品牌和品牌名称
    emit('updateAppConfig', {
      brand: selectedApp.value.brand,
      brandName: selectedApp.value.brandName
    })
    // 直接修改 switchAppConfigData 的 show 属性
    props.switchAppConfigData.show = false
  }
}

// 关闭对话框
const handleClose = () => {
  // 直接修改 switchAppConfigData 的 show 属性
  props.switchAppConfigData.show = false
  // 重置选中状态
  selectedAppBrand.value = null
  selectedApp.value = null
}

// 控制对话框显示与隐藏
const dialogVisible = computed(() => {
  return props.switchAppConfigData.show
})
</script>

<style scoped>
.vertical-app-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vertical-app-list .el-list-item {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 10px;
  transition: background-color 0.3s;
}

.vertical-app-list .el-list-item:hover {
  background-color: #f5f7fa;
}

.vertical-app-list .el-list-item.is-active {
  background-color: #e6f7ff; /* 选中时的背景颜色 */
}
</style>