<template>
  <div class="vertical pay66" :class="scopeClass">
    <div class="container container_bg vertical match_width box relative">
      <div class="match_width vertical relative">
        <div class="vertical match_width relative pw" style="position: absolute;">
          <div class="top_bg_more match_width container_bg"></div>
          <div class="top_bg match_width center relative"></div>
        </div>
      </div>
      <div class="close_line vertical relative">
        <div class="horizontal close_line pw" style="position: absolute; z-index: 20; overflow: hidden;">
          <div class="top_bg_inner absolute match_width"></div>
          <div class="horizontal match_width padding box">
            <div class="horizontal match_width relative align_center">
              <span class="text">会员VIP</span>
              <div class="absolute close match_height horizontal align_center">
                <!--<close-button @event="templateTap" :img="display.close_button.img" :limit_count="display.close_button.time"></close-button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vertical padding">
        <div class="user_panel vertical relative">
          <div class="line1 horizontal align_center relative">
            <img class="user_icon"></img>
            <span class="text">开通会员/购买本片可观看影片完整版</span>
            <div class="flex1"></div><div class="login_button">登录</div>
          </div>
        </div>
        <div class="horizontal payment_list relative">
          <div v-if="displayPayments.items.length > 0" style="overflow-x: scroll">
            <div class="horizontal">
              <div class="horizontal relative" v-for="(item, index) in displayPayments.items" :key="index">
                <div class="payment_item vertical align_center relative" :class="{ sel: item.key == displayPayments.sel.key }" @click="displayPayments.sel=item">
                  <div class="text1"><span class="ellipsis">{{item.text1}}</span></div>
                  <div class="text2 ellipsis">
                    <span v-if="!item.isDiamond" class="text21">￥</span>
                    <span class="word_nowrap">{{item.text2}}</span>
                    <span v-if="item.isDiamond" class="text21">钻</span>
                  </div>
                  <div class="text3"><span class="ellipsis" :class="{ through: item.text3.lineThrough }">{{item.text3.text}}</span></div>
                  <div v-if="displayPayments.allowText4" class="text4_container match_width">
                    <div v-if="item.text4" class="text4 match_parent horizontal center">
                      <span class="ellipsis">{{item.text4}}</span>
                    </div>
                  </div>
                  <img class="left_top_corner absolute" mode="heightFix"></img>
                  <div class="border_container absolute_fix vertical">
                    <div class="horizontal flex1"><div class="border flex1"></div></div>
                  </div>
                </div>
                <div v-if="index < displayPayments.items.length - 1" style="width: 30px;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_notice vertical relative">
          <div class="block1 vertical">
            <div class="line1 horizontal align_center">
              售后保障<img class="icon"></img>
              <div class="flex1"></div><span class="text2" @click="">联系客服</span>
            </div>
            <div class="text_line" style="margin-bottom: 16px;">影视会员属于虚拟产品，不允许未成年人购买</div>
            <div class="text_line">购买后，如您要咨询解决或遇到无法播放、订单超时等问题 请联系客服</div>
          </div>
          <div class="block2" v-if="displayPayments.sel.desc">
            <!--<notice-text :text="displayPayments.sel.desc"></notice-text>-->
          </div>
        </div>
        <!--<authority-board class="relative" caption="权益说明"></authority-board>-->
      </div>
      <div class="vertical">
        <div class="match_width vertical" style="position: absolute; z-index: 20; bottom: 0; background: #F8F9FC;">
          <div class="pay_box vertical padding box">
            <component :is="getPayBoardComponent" :item="displayPayments.sel"
              :config="config" :root="root"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import PayBoardV1 from './pay-board/v1.vue'
import PayBoardV2 from './pay-board/v2.vue'
import PayBoardV3 from './pay-board/v3.vue'
import useThemeData from "../../../../action/theme/useThemeData";
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
});

const { action } = useThemeData();

const payBoard = reactive(props.config.components[subComponents.payBoard.name]);
const scopeClass = computed(() => `${rootComponents.pay66.clz}-v${props.tid}`);

console.error(tag, 'payBoard id', payBoard.id);

// 计算属性，根据 payBoard.id 返回对应的组件
const getPayBoardComponent = computed(() => {
  const componentMap = { 3: PayBoardV3, 2: PayBoardV2, default: PayBoardV1 };
  return componentMap[payBoard.id] || componentMap.default;
});

onMounted(async () => {
  action.applyComponentLess({
    component: rootComponents.pay66, config: props.config.components, tid: props.tid
  });
});
</script>