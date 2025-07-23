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
          <div class="vertical center agree" :class="{ noAgree: !agree }">✓</div>
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
const agree = ref(false)
</script>

<style lang="less" scoped>
.pay_board {
  height: 84px;
  .panel {
    background: #2E2E30;
    border-radius: 8px;
    .box1 {
      margin-left: 14px;
      padding: 4px 0 9px;
      .pay_price {
        color: #FF5E2D;
        font-size: 24px;
        font-weight: bold;
        line-height: 33.5px;
        .rmb {
          font-size: 13px;
          margin-right: 4px;
        }
      }
      .protocol {
        color: #ffffff80;
        font-size: 10px;
        margin-top: 0.5px;
        align-items: flex-start;
        .agree_text {
          color: #ffffff80;
        }
        .agree {
          width: 10px;
          height: 10px;
          min-width: 10px;
          border-radius: 6px;
          font-size: 9px;
          line-height: 8px;
          color: #ffffff80;
          border: 0.5px solid #ffffff80;
          margin-top: 2.5px;
        }
        .noAgree {
          color: transparent;
        }
      }
    }
    .box2 {
      .submit_button {
        height: 40px;
        padding: 0 17px;
        white-space: nowrap;
        font-size: 17px;
        border-radius: 20px;
        margin-right: 12px;
        background: #FF5E2D;
        color: white;
      }
    }
  }
}

</style>