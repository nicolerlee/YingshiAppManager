<template>
  <div>
    <div class="vip-footer">
      <div class="total">合计：<span class="total-price">¥{{ priceList[activeTab] }}</span></div>
      <button class="pay-btn">立即支付</button>
    </div>
    <div class="vip-tip">
      <i class="el-icon-warning"></i> 会员服务协议 <span class="divider">|</span> 自动续费协议
    </div>
  </div>
</template>

<script setup>
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
</script>

<style lang="less" scoped>
.vip-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 0;
  .total {
    font-size: 16px;
    color: #333;
    .total-price {
      color: #e67c1a;
      font-weight: 600;
      font-size: 20px;
      margin-left: 2px;
    }
  }
  .pay-btn {
    background: linear-gradient(90deg, #ffb43a 0%, #ff7c1a 100%);
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 32px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(255, 180, 58, 0.15);
    transition: background 0.2s;
    &:hover {
      background: linear-gradient(90deg, #ff7c1a 0%, #ffb43a 100%);
    }
  }
}
.vip-tip {
  font-size: 12px;
  color: #bbb;
  text-align: center;
  margin: 10px 0 12px 0;
  .divider {
    margin: 0 6px;
    color: #e0e0e0;
  }
  i {
    color: #f5a623;
    margin-right: 2px;
  }
}
</style> 