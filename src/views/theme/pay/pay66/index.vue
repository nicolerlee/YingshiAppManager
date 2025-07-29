<template>
  <div class="vertical pay66 center">
    <div>模板{{config.version}}</div>
  </div>
</template>


<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import PayBoardV1 from './pay-board/v1.vue'
import PayBoardV2 from './pay-board/v2.vue'
import PayBoardV3 from './pay-board/v3.vue'
import useConstant from "../../../../action/theme/useConstant";
import useMockData from "../../hooks/useMockData";

const tag = 'pay66';
const rootComponents = useConstant().rootComponents();
const subComponents = useConstant().subComponents();

const payItems = useMockData().pay66.payments;
const displayPayments = reactive({
  items: payItems,
  sel: payItems[0],
});

const props = defineProps({
  config: { type: Object, required: true },
  root: { type: Object, required: true },
  tid: { type: Number, required: true },
  mode: { type: String, required: true },
});

const payBoard = reactive(props.config.components[subComponents.payBoard.name]);

console.error(tag, 'props.config', props.config);

// 计算属性，根据 payBoard.id 返回对应的组件
const getPayBoardComponent = computed(() => {
  const componentMap = { 3: PayBoardV3, 2: PayBoardV2, default: PayBoardV1 };
  return componentMap[payBoard.id] || componentMap.default;
});

onMounted(async () => {
});
</script>