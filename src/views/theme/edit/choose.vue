<template>
  <component :is="activeMenuComponent" :root="args.root" mode="applied"/>
</template>

<script setup>
import {computed} from "vue";
import Pay6 from "@/views/theme/pay/pay6/index.vue";
import use from "@/views/theme/use/index.vue";
import useThemeData from "@/action/theme/useThemeData.js";
import useConstant from "@/action/theme/useConstant.js";

const props = defineProps({
  choose: { type: String, required: true },
});

const args = computed(() => {
  return {
    root: rootComponents.pay66,
  }
});
const rootComponents = useConstant().rootComponents();


const activeMenuComponent = computed(() => {
  if (props.choose === 'pay6') return Pay6
  if (props.choose === 'pay66') return use
  return null
})
</script>

<style scoped>

</style>