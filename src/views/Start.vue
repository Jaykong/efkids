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
import ef_logo from "../assets/images/efLogo_start.png";

export default {
  mounted() {
      if (wx) {
          axios.post('https://www.mufenggame.com/wxJssdk/getJssdk', {url: location.href}).then((response) => {
              var data = response.data

              wx.config({
                  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId: data.appId, // 必填，公众号的唯一标识
                  timestamp: data.timestamp, // 必填，生成签名的时间戳
                  nonceStr: data.nonceStr, // 必填，生成签名的随机串
                  signature: data.signature,// 必填，签名，见附录1
                  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });

              wx.ready(function () {
                  wx.onMenuShareTimeline({
                      title: "我的分享",
                      desc: wxShare.desc,
                      link: wxShare.link,
                      imgUrl: "http://www.yiwangezan.cn/loading/loading.png"
                  });

                  wx.onMenuShareAppMessage({
                      title: wxShare.title,
                      desc: wxShare.desc,
                      link: wxShare.link,
                      imgUrl: "http://www.yiwangezan.cn/loading/loading.png"
                  });
              })

              wx.error(function (res) {
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
              })
          })

      }
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
