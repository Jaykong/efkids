<template>
  <div class="container">
    <div class="container-canvas" ref="canvas2img"></div>
    <div class="container-passport" id="capture">
      <van-row class="cell-passport" type="flex" justify="center">
        <van-col span="21">
          <img
            class="passport-singleBg"
            src="../assets/images/passport_grid_bg.png"
          />
        </van-col>
      </van-row>

      <van-row class="cell-badge">
        <van-col offset="2" span="21" class="badges">
          <badge-load />
        </van-col>
        <van-col offset="1" span="21">
          <van-row class="cell-photo" type="flex" justify="center">
            <van-col span="9">
              <van-row type="flex" justify="center">
                <van-col>
                  <div class="photo">
                    <img :src="photo" width="105" />
                  </div>
                  <div :class="'name ' + color">{{ name }}</div>
                </van-col>
              </van-row>
            </van-col>

            <van-col span="14">
              <van-row type="flex">
                <van-col class="text">
                  <div>
                    恭喜
                    <span :class="'name ' + color">{{ name }}</span
                    >宝贝
                  </div>
                  <div>
                    走过
                    <span :class="'large ' + color">{{ continent_count }}</span
                    >个大洲
                    <span :class="'large ' + color">{{ country_count }}</span
                    >个国家
                  </div>
                  <div>
                    领先全国
                    <span :class="'large ' + color">{{ exceed }}%</span>
                    的同龄人
                  </div>
                  <div>
                    喜获
                    <span :class="'title ' + bg">· {{ title }} ·</span> 称号
                  </div>
                </van-col>
              </van-row>

              <van-row type="flex">
                <van-col class="slogan">
                  <div>
                    新的一年， <br />让英孚全球近百条游学线路
                    <br />陪你去看更大的世界！
                  </div>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </van-col>
      </van-row>

      <van-row class="cell-qrcode" type="flex" align="center">
        <van-col>
          <van-row type="flex" justify="center">
            <van-col class="qrcode">
              <img src="../assets/images/qrcode.png" />
            </van-col>
            <van-col class="text">
              <p>扫码制作 <br />宝贝专属护照 <br />回顾世界足迹</p>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>

    <van-row class="container-save" type="flex" justify="center" align="center">
      <van-col class="text">长按保存图片，分享朋友圈晒出宝贝的世界足迹</van-col>
    </van-row>

    <van-row class="container-start" type="flex" justify="end">
      <van-col>
        <a href="https://jinshuju.net/f/9ZFULV">
          <img class="start-btn" src="../assets/images/statNewTripBtn.png" />
        </a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import html2canvas from "html2canvas";
import BadgeLoad from "../components/BadgeLoad";

export default {
  data() {
    return {
      title: "东方文明小使者",
      color: "messenger",
      bg: "messenger-bg",
      continent_count: 1,
      exceed: 88
    };
  },
  computed: {
    ...mapState({
      name: state => state.name,
      photo: state => state.photo,
      country_count: state => state.country_count,
      current_continent: state => state.current_continent
    })
  },
  components: {
    BadgeLoad
  },
  created() {
    const continent = [...new Set(this.current_continent)];

    this.continent_count = continent.length;

    const index_asia = continent.indexOf("亚洲");
    if (index_asia !== -1) {
      continent.splice(index_asia, 1);
    }

    // console.log(continent);

    const len = continent.length;

    const num = Number(
      (
        (Math.floor(Math.random() * 10) * 100 +
          Math.floor(Math.random() * 10) * 10 +
          Math.floor(Math.random() * 10)) /
        100
      ).toFixed(2)
    );
    this.exceed = 80 + num;

    if (this.continent_count === 0) {
      this.title = "东方文明小使者";
      this.color = "messenger";
      this.bg = "messenger-bg";
      this.exceed = 80 + num;
    } else if (this.country_count >= 3) {
      this.title = "小小环球旅行家";
      this.color = "traveller";
      this.bg = "traveller-bg";

      this.exceed = 85 + num;

      if (this.country_count >= 4) {
        this.exceed = 90 + num;
      } else if (this.country_count >= 5) {
        this.exceed = 90 + num;
      } else if (this.country_count >= 6) {
        this.exceed = 90 + num;
      }
    } else if (len === 1 && continent.includes("欧洲")) {
      this.title = "欧洲传奇见证者";
      this.color = "witness";
      this.bg = "witness-bg";
      this.exceed = 85 + num;
    } else if (len === 1 && continent.includes("北美洲")) {
      this.title = "活力美洲代言人";
      this.color = "spokes";
      this.bg = "spokes-bg";
      this.exceed = 85 + num;
    } else if (len === 1 && continent.includes("大洋洲")) {
      this.title = "自然风光记录者";
      this.color = "recorder";
      this.bg = "recorder-bg";
      this.exceed = 85 + num;
    } else if (
      continent.includes("南美洲") ||
      continent.includes("南极洲") ||
      continent.includes("非洲")
    ) {
      this.title = "勇气满满探险家";
      this.color = "explorer";
      this.bg = "explorer-bg";
      this.exceed = 85 + num;
    }
  },
  mounted() {
    /**
     * 绘制canvas
     */
    const convert2canvas = selector => {
      const dom = document.querySelector(selector);
      const width = dom.offsetWidth;
      const height = dom.offsetHeight;

      html2canvas(dom).then(function(canvas) {
        convertCanvas2Image(canvas, width, height);
      });
    };

    /**
     * 图片转base64格式
     */
    const convertCanvas2Image = (canvas, x, y) => {
      const image = new Image();
      image.width = x;
      image.height = y;
      image.src = canvas.toDataURL("image/png");

      const _passport = document.querySelector(".container-passport");
      const _container = document.querySelector(".container");
      _container.removeChild(_passport);

      // document.body.appendChild(image);
      this.$refs.canvas2img.appendChild(image);

      return image;
    };

    setTimeout(() => {
      convert2canvas("#capture");
    }, 200);
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .container-passport {
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/images/commonBg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;

    .cell-height {
      top: 8vh;
    }

    .cell-passport {
      position: absolute;
      top: 2vh;
      z-index: 10;

      .passport-singleBg {
        width: 100%;
      }
    }

    .cell-badge {
      position: absolute;
      top: 2vh;
      z-index: 11;

      .badges {
        margin-top: 3vh;
        width: 340px;
        height: 240px;
        overflow: hidden;
      }

      .cell-photo {
        margin-top: 3vh;

        .photo {
          width: 105px;
          height: 150px;
          overflow: hidden;
        }

        .name {
          margin-top: 4px;
          text-align: center;
          font-weight: 600;
        }

        .text {
          color: rgb(30, 52, 151);
          font-size: 0.85rem;

          .name {
            font-weight: 600;
          }

          .large {
            font-size: 1.25rem;
            font-weight: 600;
          }

          .title {
            font-weight: 600;
            height: 28px;
            line-height: 28px;
            display: inline-block;
            color: #fff;
            padding: 0 8px;
            border-radius: 14px;
          }
        }

        .slogan {
          margin-top: 12px;
          font-size: 0.75rem;
        }
      }
    }

    .cell-qrcode {
      position: absolute;
      top: 86vh;
      left: 4vw;

      .qrcode {
        width: 72px;
        height: 72px;

        img {
          width: 72px;
          height: 72px;
        }
      }

      .text {
        width: 72px;
        font-size: 0.75rem;
        color: #fff;
        margin-left: 8px;
      }
    }
  }

  //见证者
  .witness {
    color: #0067aa;
  }

  .witness-bg {
    background: #0067aa;
  }

  //代言人
  .spokes {
    color: #d04026;
  }

  .spokes-bg {
    background: #d04026;
  }

  //记录者
  .recorder {
    color: #4b9363;
  }

  .recorder-bg {
    background: #4b9363;
  }

  //旅行家
  .traveller {
    color: #50a1c3;
  }

  .traveller-bg {
    background: #50a1c3;
  }

  //探险家
  .explorer {
    color: #d59100;
  }

  .explorer-bg {
    background: #d59100;
  }

  //小使者
  .messenger {
    color: #b883bb;
  }

  .messenger-bg {
    background: #b883bb;
  }

  .container-canvas {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .container-save {
    width: 100vw;
    position: absolute;
    top: 82vh;
    z-index: 999;

    .text {
      font-size: 12px;
      color: #fff;
    }
  }

  .container-start {
    width: 40vw;
    position: absolute;
    top: 90vh;
    right: 4vw;
    z-index: 999;
    .start-btn {
      width: 150px;
    }
  }
}
</style>
