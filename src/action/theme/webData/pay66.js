const pay66 = {
  config: [
    {
      "components" : {
        "pay-board" : {
          "style" : "1",
          "id" : "3"
        },
        "plane-payment": {
          "style" : "1",
          "id" : "1"
        }
      }
    },
    {
      "components" : {
        "pay-board" : {
          "style" : "2",
          "id" : "3"
        },
        "plane-payment": {
          "style" : "2",
          "id" : "1"
        }
      },
    },
    {
      "components" : {
        "pay-board" : {
          "style" : "1",
          "id" : "1"
        },
        "plane-payment": {
          "style" : "3",
          "id" : "1"
        }
      },
    },
  ],

  root: {
    s1: `.container_bg { background: #F8F9FC; }
.container {
  min-height: 100%;
  .top_bg { background: linear-gradient( 180deg, #FFF6E0 0%, #F8F9FC 60%); height: 208rpx; }
  .top_bg_more { height: 800rpx; position: absolute; left: 0; top: 0; }
  .top_bg_inner {
    height: 208rpx; left: 0; top: 0;
    background: linear-gradient( 180deg, #FFF6E0 0%, #F8F9FC 60%);
  }
  .padding { padding: 0 24rpx; }
  .close_line {
    height: 101rpx;
    .text { font-size: 34rpx; color: #222222; }
    .close {
      right: 0; top: 0; padding-left: 40rpx;
    }
  }
  .user_panel {
    .line1 {
      padding-bottom: 44rpx; margin-top: 7rpx;
      .user_icon { width: 56rpx; height: 56rpx; }
      .text { font-size: 26rpx; color: #333333; margin-left: 16rpx; }
      .login_button {
        background: rgba(254,230,180,0.4); border-radius: 100rpx; font-size: 26rpx;
        color: rgba(103,29,0,0.8); padding: 8rpx 25rpx;
      }
    }
  }
  .payment_list {
    margin-bottom: 20rpx;
    .payment_item {
      width: 228rpx; border-radius: 16rpx; border: none; background: white;
      .border_container {
        .border {
          border-radius: 16rpx; border: solid 2rpx white;
        }
      }
      .text1 {
        margin-top: 48rpx; color: #4C4C4C; font-size: 28rpx; line-height: 28rpx; height: 32rpx;
      }
      .text2 {
        margin-top: 16rpx; color: #4C4C4C; font-size: 60rpx; line-height: 60rpx; font-weight: bold; height: 64rpx;
        .text21 {
          font-size: 28rpx; line-height: 28rpx;
        }
      }
      .text3 {
        margin-top: 16rpx; margin-bottom: 19rpx; color: #7F7F7F; font-size: 24rpx; line-height: 24rpx; height: 32rpx;
      }
      .text4_container {
        height: 44rpx;
        .text4 {
          background: #00000020;
          color: #7F7F7F; font-size: 22rpx; border-radius: 0rpx 0rpx 16rpx 16rpx; border: none;
        }
      }
      .left_top_corner {
        height: 34rpx; width: 0; left: 0; top: 0; border-top-left-radius: 16rpx;
      }
      .gesture { right: 10rpx; bottom: 10rpx; }
    }
    .payment_item.sel {
      background: #FEE6B466; width: 292rpx;
      .border_container {
        .border { border: solid 2rpx #FFDD9B99; }
      }
      .text1 { color: #671D00; }
      .text2 { color: #671D00; }
      .text3 { color: #671D0099; }
      .text4_container {
        .text4 {
          background: linear-gradient( 90deg, #FE7633 0%, #FF4240 100%); color: white;
        }
      }
    }
  }
  .service_notice {
    margin-bottom: 16rpx;
    .block1 {
      padding: 24rpx 20rpx; background: white;
      .line1 {
        color: #333333; font-size: 26rpx; margin-bottom: 12rpx;
        .icon { width: 24rpx; height: 24rpx; margin-left: 12rpx; }
        .text2 { font-size: 24rpx; color: #115CC6; }
      }
      .text_line { color: #7F7F7F; font-size: 24rpx; }
    }
    .block2 {
      color: #B2B2B2; font-size: 24rpx; margin-top: 20rpx;
    }
  }
  .pay_box {
    background: #FFFFFF; box-shadow: 0rpx -1rpx 0rpx 0rpx #F3F3F3; padding-top: 24rpx;
    .error_tip { color: #7F7F7F; font-size: 32rpx; line-height: 32rpx; margin-bottom: 20rpx; }
  }
}
.through { text-decoration: line-through; }`,
    s2: `.container_bg { background: white; }
.container {
  min-height: 100%;
  .padding { padding: 0 24rpx; }
  .top_bg { background: linear-gradient( 180deg, #FFDEDA 0%, #FFFFFF 100%); height: 208rpx; }
  .top_bg_more { height: 800rpx; position: absolute; left: 0; top: 0; }
  .top_bg_inner {
    height: 208rpx; left: 0; top: 0;
    background: linear-gradient( 180deg, #FFDEDA 0%, #FFFFFF 100%);
  }
  .close_line {
    height: 101rpx;
    .text { font-size: 34rpx; color: #191919; }
    .close { right: 0; top: 0; padding-left: 40rpx; }
  }
  .user_panel {
    .line1 {
      padding-bottom: 20rpx; margin-top: 7rpx;
      .user_icon { width: 56rpx; height: 56rpx; }
      .text { font-size: 32rpx; color: #333333; }
      .text2 {
        font-size: 26rpx; color: #00000080;
        .arrow_right {
          width: 8rpx; height: 8rpx; margin-left: 6rpx;
          border-top: 2rpx solid #00000080;
          border-right: 2rpx solid #00000080;
          transform: rotate(45deg);
        }
      }
    }
  }
  .payment_list {
    .payment_item {
      width: 331rpx; border-radius: 16rpx; border: none; background: #F7F7F7;
      .border_container {
        .border {
          border-radius: 16rpx; border: solid 3rpx transparent;
        }
      }
      .text1 {
        margin-top: 48rpx; color: #4C4C4C; font-size: 28rpx; line-height: 28rpx; height: 32rpx;
      }
      .text2 {
        margin-top: 18rpx; color: #4C4C4C; font-size: 58rpx; line-height: 58rpx; font-weight: bold; height: 64rpx;
        .text21 {
          font-size: 28rpx; line-height: 28rpx;
        }
      }
      .text3 {
        margin-top: 16rpx; margin-bottom: 19rpx; color: #7F7F7F; font-size: 26rpx; line-height: 26rpx; height: 37rpx;
      }
      .text4_container {
        height: 44rpx;
        .text4 {
          background: #00000020;
          color: #7F7F7F; font-size: 22rpx; border-radius: 0rpx 0rpx 16rpx 16rpx; border: none;
        }
      }
      .left_top_corner {
        height: 34rpx; width: 0; left: 0; top: 0; border-top-left-radius: 16rpx;
      }
      .gesture { right: 10rpx; bottom: 10rpx; }
    }
    .payment_item.sel {
      background: linear-gradient(to bottom, #FFE5E3, #FFF7F7);
      .border_container {
        .border { border: solid 3rpx #DB342433; }
      }
      .text1 { color: #DB3424; }
      .text2 { color: #DB3424; }
      .text3 { color: #DB342480; }
      .text4_container {
        .text4 {
          background: linear-gradient( 90deg, #FE7633 0%, #FF4240 100%); color: white;
        }
      }
    }
  }
  .service_notice {
    margin-top: 8rpx;
    .block1 {
      padding: 24rpx;
      .line1 {
        color: #4C4C4C; font-size: 24rpx; margin-bottom: 12rpx;
        .icon { width: 24rpx; height: 24rpx; margin-left: 12rpx; }
        .text2 { font-size: 24rpx; color: #385080; }
      }
      .text_line { color: #666666; font-size: 24rpx; }
    }
    .block2 {
      color: #4C4C4C; font-size: 24rpx; margin-top: 20rpx;
    }
  }
  .pay_box {
    background: #FFFFFF; box-shadow: 0rpx -1rpx 0rpx 0rpx #F3F3F3; padding-top: 24rpx;
    .error_tip { color: #7F7F7F; font-size: 32rpx; line-height: 32rpx; margin-bottom: 20rpx; }
  }
}
.through { text-decoration: line-through; }`,
    s3: `.container_bg { background: #1C1C1C; }
.container {
  min-height: 100%;
  .padding { padding: 0 24rpx; }
  .top_bg { background: linear-gradient( 180deg, #2C2822 0%, #1C1C1C 100%); height: 208rpx; }
  .top_bg_more { height: 800rpx; position: absolute; left: 0; top: 0; }
  .top_bg_inner {
    height: 208rpx; left: 0; top: 0;
    background: linear-gradient( 180deg, #2C2822 0%, #1C1C1C 100%);
  }
  .close_line {
    height: 101rpx;
    .text { font-size: 34rpx; color: #FFE6BC; }
    .close { right: 0; top: 0; padding-left: 40rpx; }
  }
  .user_panel {
    .line1 {
      padding-bottom: 20rpx; margin-top: 7rpx;
      .user_icon { width: 56rpx; height: 56rpx; }
      .text { font-size: 32rpx; color: #FFFFFFCC; }
      .text2 {
        font-size: 26rpx; color: #FFFFFF80;
        .arrow_right {
          width: 8rpx; height: 8rpx; margin-left: 6rpx;
          border-top: 2rpx solid #FFFFFF80;
          border-right: 2rpx solid #FFFFFF80;
          transform: rotate(45deg);
          color: #FFFFFF80;
        }
      }
    }
  }
  .payment_list {
    .payment_item {
      width: 331rpx; border-radius: 16rpx; border: none; background: #FFFFFF1A;
      .border_container {
        .border {
          border-radius: 16rpx; border: solid 3rpx transparent;
        }
      }
      .text1 {
        margin-top: 48rpx; color: #FFFFFFCC; font-size: 28rpx; line-height: 28rpx; height: 32rpx;
      }
      .text2 {
        margin-top: 18rpx; color: #FFFFFFCC; font-size: 58rpx; line-height: 58rpx; font-weight: bold; height: 64rpx;
        .text21 {
          font-size: 28rpx; line-height: 28rpx;
        }
      }
      .text3 {
        margin-top: 16rpx; margin-bottom: 19rpx; color: #FFFFFF66; font-size: 26rpx; line-height: 26rpx; height: 37rpx;
      }
      .text4_container {
        height: 44rpx;
        .text4 {
          background: #00000020;
          color: #7F7F7F; font-size: 22rpx; border-radius: 0rpx 0rpx 16rpx 16rpx; border: none;
        }
      }
      .left_top_corner {
        height: 34rpx; width: 0; left: 0; top: 0; border-top-left-radius: 16rpx;
      }
      .gesture { right: 10rpx; bottom: 10rpx; }
    }
    .payment_item.sel {
      background: linear-gradient(to bottom, #1C1C1C, #3B322B);
      .border_container {
        .border { border: solid 3rpx #FFD8A1; }
      }
      .text1 { color: #FFE0AD; }
      .text2 { color: #FFE0AD; }
      .text3 { color: #FFE0AD99; }
      .text4_container {
        .text4 {
          background: linear-gradient( 90deg, #FE7633 0%, #FF4240 100%); color: white;
        }
      }
    }
  }
  .service_notice {
    margin-top: 8rpx;
    .block1 {
      padding: 24rpx; background: #1C1C1C99;
      .line1 {
        color: #FFFFFF99; font-size: 24rpx; margin-bottom: 12rpx;
        .icon { width: 24rpx; height: 24rpx; margin-left: 12rpx; }
        .text2 { font-size: 24rpx; color: #FFE0AD; }
      }
      .text_line { color: #FFFFFF99; font-size: 24rpx; }
    }
    .block2 {
      color: #FFFFFF99; font-size: 24rpx; margin-top: 20rpx;
    }
  }
  .pay_box {
    background: #1F1F1F; box-shadow: 0rpx -1rpx 0rpx 0rpx #292929; padding-top: 24rpx;
    .error_tip { color: #7F7F7F; font-size: 32rpx; line-height: 32rpx; margin-bottom: 20rpx; }
  }
}
.through { text-decoration: line-through; }`,
    s4: `.container_bg { background: #F8F9FC; }
.container {
  min-height: 100%;
  .top_bg { background: linear-gradient( 180deg, #FFF6E0 0%, #F8F9FC 60%); height: 208rpx; }
  .top_bg_more { height: 800rpx; position: absolute; left: 0; top: 0; }
  .top_bg_inner {
    height: 208rpx; left: 0; top: 0;
    background: linear-gradient( 180deg, #FFF6E0 0%, #F8F9FC 60%);
  }
  .padding { padding: 0 24rpx; }
  .close_line {
    height: 101rpx;
    .text { font-size: 34rpx; color: #222222; }
    .close {
      right: 0; top: 0; padding-left: 40rpx;
    }
  }
  .user_panel {
    .line1 {
      padding-bottom: 44rpx; margin-top: 7rpx;
      .user_icon { width: 56rpx; height: 56rpx; }
      .text { font-size: 26rpx; color: #333333; margin-left: 16rpx; }
      .login_button {
        background: rgba(254,230,180,0.4); border-radius: 100rpx; font-size: 26rpx;
        color: rgba(103,29,0,0.8); padding: 8rpx 25rpx;
      }
    }
  }
  .payment_list {
    margin-bottom: 20rpx;
    .payment_item {
      width: 228rpx; border-radius: 16rpx; border: none; background: white;
      .border_container {
        .border {
          border-radius: 16rpx; border: solid 2rpx white;
        }
      }
      .text1 {
        margin-top: 48rpx; color: #4C4C4C; font-size: 28rpx; line-height: 28rpx; height: 32rpx;
      }
      .text2 {
        margin-top: 16rpx; color: #4C4C4C; font-size: 60rpx; line-height: 60rpx; font-weight: bold; height: 64rpx;
        .text21 {
          font-size: 28rpx; line-height: 28rpx;
        }
      }
      .text3 {
        margin-top: 16rpx; margin-bottom: 19rpx; color: #7F7F7F; font-size: 24rpx; line-height: 24rpx; height: 32rpx;
      }
      .text4_container {
        height: 44rpx;
        .text4 {
          background: #00000020;
          color: #7F7F7F; font-size: 22rpx; border-radius: 0rpx 0rpx 16rpx 16rpx; border: none;
        }
      }
      .left_top_corner {
        height: 34rpx; width: 0; left: 0; top: 0; border-top-left-radius: 16rpx;
      }
      .gesture { right: 10rpx; bottom: 10rpx; }
    }
    .payment_item.sel {
      background: linear-gradient(to bottom, #FFD786, #FFD78633, #FFF7E8); width: 292rpx;
      .border_container {
        .border { border: solid 2rpx #FFDD9B99; }
      }
      .text1 { color: #671D00; }
      .text2 { color: #671D00; }
      .text3 { color: #671D0099; }
      .text4_container {
        .text4 {
          background: linear-gradient( 90deg, #FE7633 0%, #FF4240 100%); color: white;
        }
      }
    }
  }
  .service_notice {
    margin-bottom: 16rpx;
    .block1 {
      padding: 24rpx 20rpx; background: white;
      .line1 {
        color: #333333; font-size: 26rpx; margin-bottom: 12rpx;
        .icon { width: 24rpx; height: 24rpx; margin-left: 12rpx; }
        .text2 { font-size: 24rpx; color: #BF4949; }
      }
      .text_line { color: #7F7F7F; font-size: 24rpx; }
    }
    .block2 {
      color: #B2B2B2; font-size: 24rpx; margin-top: 20rpx;
    }
  }
  .pay_box {
    background: #FFFFFF; box-shadow: 0rpx -1rpx 0rpx 0rpx #F3F3F3; padding-top: 24rpx;
    .error_tip { color: #7F7F7F; font-size: 32rpx; line-height: 32rpx; margin-bottom: 20rpx; }
  }
}
.through { text-decoration: line-through; }`
  },

  'pay-board-v1': {
    s1: `.pay_board {
  height: 168rpx;
  .panel {
    background: #2E2E30; border-radius: 16rpx;
    .box1 {
      margin-left: 28rpx;padding: 8rpx 0 18rpx;
      .pay_price {
        color: #FF5E2D;
        font-size: 48rpx; font-weight: bold; line-height: 67rpx;
        .rmb { font-size: 26rpx; margin-right: 8rpx; }
      }
      .protocol {
        color: #ffffff80;
        font-size: 20rpx; margin-top: 1rpx; align-items: flex-start;
        .agree_text { color: #ffffff80; }
        .agree {
          width: 20rpx; height: 20rpx; min-width: 20rpx; border-radius: 12rpx; font-size: 18rpx; line-height: 16rpx;
          color: #ffffff80; border:1rpx solid #ffffff80; margin-top: 5rpx;
        }
        .noAgree { color: transparent; }
      }
    }
    .box2 {
      .submit_button {
        height: 80rpx; padding: 0 34rpx; white-space: nowrap; font-size: 34rpx;
        border-radius: 40rpx; margin-right: 24rpx;
        background: #FF5E2D; color: white;
      }
    }
  }
}`,
    s2: `.brandConfig() {
  .panel() { background: #2E2E30; }
  .pay_price() { color: #F83B29; }

  .protocol() { color: #ffffff80; }

  .agree() {}

  .submit_button() { background: #DB3424; }
}
.brandConfig();
.pay_board {
  height: 168rpx;
  .panel {
    .panel(); border-radius: 16rpx;
    .box1 {
      margin-left: 28rpx;padding: 8rpx 0 18rpx;
      .pay_price {
        font-size: 48rpx; font-weight: bold; line-height: 67rpx; .pay_price();
        .rmb { font-size: 26rpx; margin-right: 8rpx; }
      }
      .protocol {
        font-size: 20rpx; margin-top: 1rpx; align-items: flex-start; .protocol();
        .agree_text { color: #ffffff80; }
        .agree {
          width: 20rpx; height: 20rpx; min-width: 20rpx; border-radius: 12rpx; font-size: 18rpx; line-height: 16rpx;
          color: #ffffff80; border:1rpx solid #ffffff80; margin-top: 5rpx; .agree();
        }
        .noAgree { color: transparent; }
      }
    }
    .box2 {
      .submit_button {
        height: 80rpx; padding: 0 34rpx; white-space: nowrap; font-size: 34rpx;
        border-radius: 40rpx; margin-right: 24rpx; .submit_button();
      }
    }
  }
}`,
    s3: `.brandConfig() {
  .panel() { background: #2E2E30; }
  .pay_price() { color: #5DA2FB; }

  .protocol() { color: #ffffff80; }

  .agree() {}

  .submit_button() { background: linear-gradient( 270deg, #57A9FC 0%, #8175F7 100%); color: #FFFFFF }

}
.brandConfig();
.pay_board {
  height: 168rpx;
  .panel {
    .panel(); border-radius: 16rpx;
    .box1 {
      margin-left: 28rpx;padding: 8rpx 0 18rpx;
      .pay_price {
        font-size: 48rpx; font-weight: bold; line-height: 67rpx; .pay_price();
        .rmb { font-size: 26rpx; margin-right: 8rpx; }
      }
      .protocol {
        font-size: 20rpx; margin-top: 1rpx; align-items: flex-start; .protocol();
        .agree_text { color: #ffffff80; }
        .agree {
          width: 20rpx; height: 20rpx; min-width: 20rpx; border-radius: 12rpx; font-size: 18rpx; line-height: 16rpx;
          color: #ffffff80; border:1rpx solid #ffffff80; margin-top: 5rpx; .agree();
        }
        .noAgree { color: transparent; }
      }
    }
    .box2 {
      .submit_button {
        height: 80rpx; padding: 0 34rpx; white-space: nowrap; font-size: 34rpx;
        border-radius: 40rpx; margin-right: 24rpx; .submit_button();
      }
    }
  }
}`,
  },
  'pay-board-v2': {
    s1: `.pay_board {
  height: 104rpx;
  .error {
    font-size: 26rpx; line-height: 26rpx; color: white;
    background: linear-gradient(270deg, #61605D 0%, #1E1E1E 100%); border-radius: 24rpx;
  }
  .left {
    width: 60%; background: linear-gradient(270deg, #61605D 0%, #1E1E1E 100%); border-radius: 24rpx 0rpx 0rpx 24rpx;
    padding-left: 28rpx;
    .text1 {
      font-size: 26rpx; line-height: 26rpx; color: white; margin-right: 13rpx;
    }
    .text2 {
      font-size: 26rpx; line-height: 26rpx; color: #FFE3AC; font-weight: bold; margin-right: 8rpx;
    }
    .text3 {
      font-size: 48rpx; line-height: 48rpx; color: #FFE3AC; font-weight: bold; margin-right: 8rpx;
    }
  }
  .right {
    width: 50%; top: 0; right: 0; background: linear-gradient(to right, #FFE2AB, #FFF1D5); border-radius: 24rpx;
    color: #573327; font-size: 38rpx; font-weight: bold;
    .button_gif {
      overflow: hidden; border-radius: 24rpx;
      .sweep_box {
        animation: sweepMoveLTR 1s infinite;
        .sweep1 { width: 40rpx; background: linear-gradient(45deg, #fff9ed00, #fff9edb3); height: 100%; margin-right: 20rpx; }
        .sweep2 { width: 80rpx; background: linear-gradient(45deg, #fff9ed00, #fff9ede3); height: 100%; }
      }
    }
  }
}
.check_board {
  padding-top: 20rpx; padding-bottom: 68rpx; font-size: 22rpx; color: #00000066;
  .check_box {
    width: 24rpx; height: 24rpx; border-radius: 50%; border: solid 2rpx #00000030; margin-right: 12rpx;
    .mark {
      transform: rotate(-45deg); margin-bottom: 2rpx;
      width: 16rpx; height: 8rpx; border-left: solid 2rpx #00000030; border-bottom: solid 2rpx #00000030;
    }
  }
  .check_touch {
    width: 150%; height: 200%; left: -50%;
  }
}
@keyframes sweepMoveLTR {
  0% {
    transform: translateX(-100%) skewX(-30deg)
  }
  100% {
    transform: translateX(250%) skewX(-30deg)
  }
}`,
    s2: `.pay_board {
  height: 104rpx;
  .error {
    font-size: 26rpx; line-height: 26rpx; color: white;
    background: linear-gradient( 90deg, #38332E 0%, rgba(56,51,46,0.5) 100%); border-radius: 24rpx;
  }
  .left {
    width: 60%; background: linear-gradient( 90deg, #38332E 0%, rgba(56,51,46,0.5) 100%); border-radius: 24rpx 0rpx 0rpx 24rpx;
    padding-left: 28rpx;
    .text1 {
      font-size: 26rpx; line-height: 26rpx; color: white; margin-right: 13rpx;
    }
    .text2 {
      font-size: 26rpx; line-height: 26rpx; color: #FFE3AC; font-weight: bold; margin-right: 8rpx;
    }
    .text3 {
      font-size: 48rpx; line-height: 48rpx; color: #FFE3AC; font-weight: bold; margin-right: 8rpx;
    }
  }
  .right {
    width: 50%; top: 0; right: 0; background: linear-gradient(to right, #FFD292, #FFF0CD); border-radius: 24rpx;
    color: #573327; font-size: 38rpx; font-weight: bold;
    .button_gif {
      overflow: hidden; border-radius: 24rpx;
      .sweep_box {
        animation: sweepMoveLTR 1s infinite;
        .sweep1 { width: 40rpx; background: linear-gradient(45deg, #fff9ed00, #fff9edb3); height: 100%; margin-right: 20rpx; }
        .sweep2 { width: 80rpx; background: linear-gradient(45deg, #fff9ed00, #fff9ede3); height: 100%; }
      }
    }
  }
}
.check_board {
  padding-top: 20rpx; padding-bottom: 68rpx; font-size: 22rpx; color: #FFFFFF66;
  .check_box {
    width: 24rpx; height: 24rpx; border-radius: 50%; border: solid 2rpx #FFFFFF30; margin-right: 12rpx;
    .mark {
      transform: rotate(-45deg); margin-bottom: 2rpx;
      width: 16rpx; height: 8rpx; border-left: solid 2rpx #FFFFFF30; border-bottom: solid 2rpx #FFFFFF30;
    }
  }
  .check_touch {
    width: 150%; height: 200%; left: -50%;
  }
}
@keyframes sweepMoveLTR {
  0% {
    transform: translateX(-100%) skewX(-30deg)
  }
  100% {
    transform: translateX(250%) skewX(-30deg)
  }
}`
  },
  'pay-board-v3': {
    s1: `.pay_board {
  height: 96rpx; background: linear-gradient( 270deg, #FEE6C0 0%, #FFC8A5 100%), #732F06; border-radius: 100rpx;
  .text1 { color: #671D00; font-size: 28rpx; line-height: 28rpx; margin-left: 6rpx; }

  .text2 { color: #671D00; font-size: 42rpx; line-height: 42rpx; font-weight: bold; margin-left: 6rpx; }

  .text3 { color: #671D00; font-size: 32rpx; line-height: 32rpx; margin-left: 12rpx; }

}

.pay_board.flick {
  animation: flick-animation 0.4s infinite alternate ease-in;
}
.check_board {
  padding-top: 20rpx; padding-bottom: 68rpx; font-size: 22rpx; color: #00000066;
  .check_box {
    width: 24rpx; height: 24rpx; border-radius: 50%; border: solid 4rpx #00000030; margin-right: 12rpx;
    .mark {
      transform: rotate(-45deg); margin-bottom: 2rpx;
      width: 16rpx; height: 8rpx; border-left: solid 4rpx #00000030; border-bottom: solid 4rpx #00000030;
    }
  }
  .check_touch {
    width: 150%; height: 200%; left: -50%;
  }
}
@keyframes flick-animation {
  0% { transform: scale(1); }
  100% { transform: scale(0.9); }
}`,
    s2: `.pay_board {
  height: 96rpx; background: linear-gradient( 90deg, #FFE499 0%, #FFD1B6 50%, #FFA0A0 100%); border-radius: 100rpx;
  .text1 { color: #671D00; font-size: 28rpx; line-height: 28rpx; margin-left: 6rpx; }
  .text2 { color: #671D00; font-size: 42rpx; line-height: 42rpx; font-weight: bold; margin-left: 6rpx; }
  .text3 { color: #671D00; font-size: 32rpx; line-height: 32rpx; margin-left: 12rpx; }
}
.pay_board.flick {
  animation: flick-animation 0.4s infinite alternate ease-in;
}
.check_board {
  padding-top: 20rpx; padding-bottom: 68rpx; font-size: 22rpx; color: #00000066;
  .check_box {
    width: 24rpx; height: 24rpx; border-radius: 50%; border: solid 4rpx #00000030; margin-right: 12rpx;
    .mark {
      transform: rotate(-45deg); margin-bottom: 2rpx;
      width: 16rpx; height: 8rpx; border-left: solid 4rpx #00000030; border-bottom: solid 4rpx #00000030;
    }
  }
  .check_touch {
    width: 150%; height: 200%; left: -50%;
  }
}
@keyframes flick-animation {
  0% { transform: scale(1); }
  100% { transform: scale(0.9); }
}`
  },

};

export default pay66;