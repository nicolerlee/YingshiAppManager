<template>
  <div class="pay_board horizontal align_center">
    <div class="flex1 horizontal align_center panel">
      <div class="box1 vertical flex1">
        <div class="horizontal align_center">
          <div style="font-size: 26rpx; color: white;">合计：</div>
          <div class="horizontal pay_price" style="align-items: baseline;">
            ¥{{ priceList[activeTab] }}
          </div>
        </div>
        <div class="horizontal protocol">
          <div class="vertical center agree" :class="{ noAgree: !agree }" @click="agree = !agree">✓</div>
          <div style="margin-left: 12rpx;">
            <span class="agree_text word_nowrap">同意 </span>
            <span>会员服务协议</span>
          </div>
        </div>
      </div>
      <div class="box2 relative">
        <div class="vertical center submit_button">立即支付</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";
import { onMounted } from 'vue';
import {convertRpxToPx} from "../../../../../utils/common";

async function downloadLessFile(url) {
  try {
    //const response = await fetch(url);
    const response = `.pay_board {
  height: 168rpx;
  .panel {
    background: #2E2E30; border-radius: 16rpx;
    .box1 {
      margin-left: 28rpx;padding: 8rpx 0 18rpx;
      .pay_price {
        color: #FF5E2D;
        font-size: 48rpx; font-weight: bold; line-height: 67rpx;
        .rmb { font-size: 26rpx; margin-right: 8rpx; }
      }
      .protocol {
        color: #ffffff80;
        font-size: 20rpx; margin-top: 1rpx; align-items: flex-start;
        .agree_text { color: #ffffff80; }
        .agree {
          width: 20rpx; height: 20rpx; min-width: 20rpx; border-radius: 12rpx; font-size: 18rpx; line-height: 16rpx;
          color: #ffffff80; border:1rpx solid #ffffff80; margin-top: 5rpx;
        }
        .noAgree { color: transparent; }
      }
    }
    .box2 {
      .submit_button {
        height: 80rpx; padding: 0 34rpx; white-space: nowrap; font-size: 34rpx;
        border-radius: 40rpx; margin-right: 24rpx;
        background: #FF5E2D; color: white;
      }
    }
  }
}`
    /*if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();*/
    return convertRpxToPx(response);
  } catch (error) {
    console.error('Error downloading Less file:', error);
    return '';
  }
}

onMounted(async () => {
  const lessUrl = 'your-server-url/your-style.less'; // 替换为实际的 Less 文件 URL
  const lessCode = await downloadLessFile(lessUrl);
  if (lessCode) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/less';
    styleElement.textContent = lessCode;
    document.head.appendChild(styleElement);
    // 手动触发 Less 编译
    window.less.sheets.push(styleElement.sheet);
    window.less.refreshStyles();
  }
});

const props = defineProps({
  priceList: {
    type: Array,
    required: true
  },
  activeTab: {
    type: Number,
    required: true
  }
})
const agree = ref(false);
</script>

<style lang="less" scoped>


</style>