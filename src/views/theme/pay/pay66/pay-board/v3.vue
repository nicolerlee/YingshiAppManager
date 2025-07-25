<template>
  <div class="vertical" :class="scopeClass">
    <div class="pay_board relative flick">
      <div class="match_parent horizontal center" @click="">
        <div class="horizontal" style="align-items: baseline;">
          <span class="text1">¥</span>
          <span class="text2">{{item.price}}</span>
          <span class="text3">确认协议并支付</span>
        </div>
      </div>
    </div>
    <div class="check_board horizontal center">
      <div class="horizontal align_center relative">
        <div class="check_box horizontal center" :class="{ agree }">
          <div v-if="agree" class="mark"></div>
        </div>
        同意
        <div class="check_touch absolute" @click="agree=!agree">
        </div>
      </div>
      <span @click.stop="" >《风行视频付费协议》</span>
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