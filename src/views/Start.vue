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
import sha1 from "js-sha1";

import MtaH5 from "mta-h5-analysis";

export default {
  mounted() {
    // 页面上报
    MtaH5.pgv();

    this.getSignature(r => {
      if (r) {
        const appId = r.appId;
        const ticket = r.ticket;
        const noncestr = this.getRandomString(16);
        const timestamp = new Date().getTime();
        const url = window.location.href;

        const string1 = `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
        const signature = sha1(string1);

        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId, // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature, // 必填，签名
          jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表
        });
      }
    });

    wx.ready(function() {
      wx.onMenuShareTimeline({
        title: "定制宝贝环球足迹", // 分享标题
        link: "https://www.mufenggame.com?CKTAG=wechat_moments", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "https://www.mufenggame.com/loading/loading.png", // 分享图标
        success: function() {
          // 用户点击了分享后执行的回调函数
          // 用户确认分享后执行的回调函数
          MMtaH5.clickShare('wechat_moments');
        }
      });
      wx.onMenuShareAppMessage({
        title: "定制宝贝环球足迹", // 分享标题
        desc: "世界这么大，宝贝都去过哪些地方？", // 分享描述
        link: "https://www.mufenggame.com?CKTAG=wechat_friend", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "https://www.mufenggame.com/loading/loading.png", // 分享图标
        type: "", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
          // 用户点击了分享后执行的回调函数
          // 用户确认分享后执行的回调函数
            MtaH5.clickShare('wechat_friend');
          // MtaH5.clickStat("share1");
        }
      });
    });
  },
  methods: {
    getSignature(callback) {
      const api = "https://www.mufenggame.com/wxJssdk/getJssdk";
      // const current_url = window.location.href;

      axios
        .get(api)
        .then(function(r) {
          // console.log(r);
          if (r.status === 200) {
            const data = r.data.data;
            callback(data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRandomString(len) {
      len = len || 32;
      let $chars =
        "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
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
      padding-right: 20px;
    }
  }
}
</style>
