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
export default {
  mounted() {
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: "wxbcac905317a3ba59", // 必填，公众号的唯一标识
      timestamp: 1414587457, // 必填，生成签名的时间戳
      nonceStr: "Wm3WZYTPz0wzccnW", // 必填，生成签名的随机串
      signature: "5d8033b9d06c9bfebb3f1cab9da3db143f6ee129", // 必填，签名
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表
    });

    wx.ready(function() {
      //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData({
        title: "宝贝足迹", // 分享标题
        desc: "世界这么大，宝贝都去过哪些地方？", // 分享描述
        link: "http://www.yiwangezan.cn", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "", // 分享图标
        success: function() {
          // 设置成功
          console.log("ok1");
        }
      });

      //需在用户可能点击分享按钮前就先调用
      wx.updateTimelineShareData({
        title: "宝贝足迹", // 分享标题
        link: "http://www.yiwangezan.cn", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "", // 分享图标
        success: function() {
          // 设置成功
          console.log("ok2");
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
