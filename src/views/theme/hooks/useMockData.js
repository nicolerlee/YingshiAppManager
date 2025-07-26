import {reactive} from "vue";

const pay66 = {
  payments: reactive([
    {
      key: '1',
      text1: '会员VIP',
      text2: '1.99',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 0.01,
    },
    {
      key: '2',
      text1: '会员VIP',
      text2: '0.99',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 0.1,
    },
    {
      key: '3',
      text1: '会员VIP',
      text2: '1',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 1,
    },
    {
      key: '4',
      text1: '会员VIP',
      text2: '1.99',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 1.99,
    },
    {
      key: '5',
      text1: '会员VIP',
      text2: '0.01',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 2.00,
    },
    {
      key: '6',
      text1: '会员VIP',
      text2: '0.01',
      text3: {
        text: '会员VIP',
        lineThrough: true
      },
      text4: '会员VIP',
      left_top_corner: '',
      price: 0.01,
    },
  ]),
};


export default function () {
  return {
    pay66
  };
}