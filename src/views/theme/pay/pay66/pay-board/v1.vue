<template>
  <div class="" :class="scopeClass">
    <div class="pay_board horizontal align_center">
      <div class="flex1 horizontal align_center panel">
        <div class="box1 vertical flex1">
          <div class="horizontal align_center">
            <div style="font-size: 26rpx; color: white;">合计：</div>
            <div class="horizontal pay_price" style="align-items: baseline;">
              ¥{{ item.price }}
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
  </div>
</template>


<script setup>
import {computed, ref} from "vue";
import useConstant from "../../../../../action/theme/useConstant";

const subComponents = useConstant().subComponents();

const props = defineProps({
  item: { type: Object, required: true },
  config: { type: Object, required: true },
  root: { type: Object, required: true },
})
const myConfig = props.config.components[subComponents.payBoard.name];
const scopeClass = ref(`${props.root.clz}-${subComponents.payBoard.clz}-v1${myConfig.style}`);
console.log('payboard config', props.config, 'scopeClass', scopeClass)
const agree = ref(false);
</script>

<style lang="less" scoped>


</style>