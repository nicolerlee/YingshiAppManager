<template>
  <div class="vertical" :class="scopeClass">
    <div class="pay_board horizontal relative">
      <div class="left match_height horizontal align_center">
        <div class="horizontal" style="align-items: baseline;">
          <span class="text1">优惠后实付</span>
          <span class="text2">¥</span>
          <span class="text3">{{item.price}}</span>
        </div>
      </div>
      <div class="right match_height absolute">
        <div class="match_parent relative">
          <div class="match_parent horizontal center relative" @click="">
            立即支付
            <div class="absolute_fix button_gif horizontal">
              <div class="sweep_box match_height horizontal">
                <div class="sweep sweep1"></div>
                <div class="sweep sweep2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="check_board horizontal center">
      <div class="horizontal align_center relative">
        <div class="check_box horizontal center">
          <div v-if="agree" class="mark"></div>
        </div>
        同意
        <div class="check_touch absolute" @click="agree=!agree"></div>
      </div>
      <span @click="">《风行视频付费协议》</span>
    </div>
  </div>
</template>


<script setup>
import {usePayBoard} from "../../../hooks/usePayBoard";

const props = defineProps({
  item: { type: Object, required: true },
  config: { type: Object, required: true },
  root: { type: Object, required: true },
})
const { myConfig, scopeClass, agree } = usePayBoard(props);
</script>