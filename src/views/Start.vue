<template>
  <div class="container">
    <van-row type="flex">
      <van-col class="cell-logo">
        <img class="logo" src="../assets/images/efLogo_start.png">
      </van-col>
    </van-row>

    <van-row class="cell-btn" type="flex" justify="center">
      <van-col>
        <router-link to="/selectcountry">
          <img class="enter-btn" src="../assets/images/enterBtn.png">
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const api = "https://www.mufenggame.com/wxJssdk/getJssdk";
    const current_url = window.location.href;

    axios
      .post(api, {
        url: current_url
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: "wxbcac905317a3ba59", // 必填，公众号的唯一标识
      timestamp: 1414587457, // 必填，生成签名的时间戳
      nonceStr: "Wm3WZYTPz0wzccnW", // 必填，生成签名的随机串
      signature: "6373b715e80c4f1a4a90e133a5815ed8bf62289c", // 必填，签名
      jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表
    });

    wx.ready(function() {
      wx.onMenuShareTimeline({
        title: "宝贝足迹", // 分享标题
        link: "http://www.yiwangezan.cn/?wx", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://www.yiwangezan.cn/loading/loading.png", // 分享图标
        success: function() {
          // 用户点击了分享后执行的回调函数
        }
      });
      wx.onMenuShareAppMessage({
        title: "宝贝足迹", // 分享标题
        desc: "世界这么大，宝贝都去过哪些地方？", // 分享描述
        link: "http://www.yiwangezan.cn/?wx", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://www.yiwangezan.cn/loading/loading.png", // 分享图标
        type: "", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
          // 用户点击了分享后执行的回调函数
        }
      });
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/startBg.png") no-repeat center;
  background-size: cover;

  .cell-logo {
    margin-top: 24px;
    margin-left: 36px;

    .logo {
      width: 80px;
    }
  }

  .cell-btn {
    margin-top: 68vh;
    .enter-btn {
      width: 128px;
    }
  }
}
</style>
