// usePayBoard.js
import { ref, defineProps } from 'vue';
import useConstant from "../../../action/theme/useConstant";

export function usePayBoard(props) {
  const subComponents = useConstant().subComponents();

  const myConfig = props.config.components[subComponents.payBoard.name];
  const scopeClass = ref(`${props.root.clz}-${subComponents.payBoard.clz}-v${myConfig.id}${myConfig.style}`);
  console.log('payboard config', props.config, 'scopeClass', scopeClass);
  const agree = ref(false);

  return {
    myConfig,
    scopeClass,
    agree
  };
}
