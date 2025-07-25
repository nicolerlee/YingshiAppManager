<template>
  <div class="vip-pay-modal">
    <div class="modal-header">
      <span>开通会员 观看完整版</span>
      <span class="close-btn">×</span>
    </div>
    <div class="vip-options">
      <div class="vip-tabs">
        <div :class="['vip-tab', {active: activeTab === 0}]" @click="activeTab = 0">3个月VIP<br><span class="price">¥69.9</span></div>
        <div :class="['vip-tab', {active: activeTab === 1}]" @click="activeTab = 1">12个月VIP<br><span class="price">¥299.9</span></div>
        <div :class="['vip-tab', {active: activeTab === 2}]" @click="activeTab = 2">si内测(huashu)<br><span class="price">¥0.1</span></div>
      </div>
      <div class="login-tip">登录会员账号</div>
    </div>
    <div class="vip-desc">
      开通后您将解锁全部VIP内容，播放广告*自动跳过，专享1080P视觉体验。<br>
      账号仅限本人使用，或通过手机号、微信等方式登录。请详见 <a href="#">账号条款</a>
    </div>
    <div class="vip-benefits">
      <div class="benefit-item">
        <i class="icon ad"></i>
        广告特权
      </div>
      <div class="benefit-item">
        <i class="icon hd"></i>
        1080P
      </div>
      <div class="benefit-item">
        <i class="icon vip"></i>
        尊贵身份
      </div>
      <div class="benefit-item">
        <i class="icon crown"></i>
        会员专属
      </div>
    </div>
    <PayBoardV1 :price-list="priceList" :active-tab="activeTab" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PayBoardV1 from './pay-board/v1.vue'
const activeTab = ref(0)
const priceList = ['69.9', '299.9', '0.1']
</script>

<style lang="less" scoped>
.vip-pay-modal {
  width: 370px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.13);
  padding: 18px 18px 0 18px;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  position: relative;
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
    .close-btn {
      font-size: 22px;
      color: #bbb;
      cursor: pointer;
      font-weight: normal;
    }
  }
  .vip-options {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .vip-tabs {
      display: flex;
      flex: 1;
      .vip-tab {
        flex: 1;
        background: #f7f8fa;
        border-radius: 8px 8px 0 0;
        margin-right: 8px;
        padding: 10px 0 6px 0;
        text-align: center;
        font-size: 15px;
        color: #666;
        cursor: pointer;
        border: 1.5px solid #f7f8fa;
        border-bottom: none;
        transition: all 0.2s;
        .price {
          display: block;
          font-size: 18px;
          color: #e67c1a;
          font-weight: 600;
          margin-top: 2px;
        }
        &.active {
          background: #fff;
          color: #e67c1a;
          border: 1.5px solid #e67c1a;
          border-bottom: none;
          z-index: 2;
        }
      }
      .vip-tab:last-child {
        margin-right: 0;
      }
    }
    .login-tip {
      font-size: 13px;
      color: #888;
      margin-left: 10px;
      margin-top: 8px;
      white-space: nowrap;
    }
  }
  .vip-desc {
    font-size: 13px;
    color: #888;
    margin: 12px 0 8px 0;
    line-height: 1.6;
    a {
      color: #409eff;
      text-decoration: underline;
    }
  }
  .vip-benefits {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 18px 0;
    .benefit-item {
      flex: 1;
      text-align: center;
      font-size: 13px;
      color: #bfa76a;
      .icon {
        display: block;
        width: 32px;
        height: 32px;
        margin: 0 auto 4px auto;
        background: #f7f8fa;
        border-radius: 50%;
        &.ad { background: #f7f8fa url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="%23bfa76a" viewBox="0 0 20 20"><rect x="3" y="7" width="14" height="6" rx="2"/><rect x="6" y="10" width="8" height="2" rx="1"/></svg>') no-repeat center/18px; }
        &.hd { background: #f7f8fa url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="%23bfa76a" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/><text x="10" y="15" font-size="10" text-anchor="middle" fill="white">HD</text></svg>') no-repeat center/18px; }
        &.vip { background: #f7f8fa url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="%23bfa76a" viewBox="0 0 20 20"><polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/></svg>') no-repeat center/18px; }
        &.crown { background: #f7f8fa url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="%23bfa76a" viewBox="0 0 20 20"><path d="M2 14l3-8 5 6 5-6 3 8z"/><rect x="4" y="15" width="12" height="3" rx="1.5"/></svg>') no-repeat center/18px; }
      }
    }
  }
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
}
</style> 