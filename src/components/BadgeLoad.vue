<template>
  <div class="container-badges">
    <div
      v-for="(item, index) in badges"
      :key="item"
      :class="'badge badge-' + index"
    >
      <img :src="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  america,
  canada,
  england,
  ireland,
  spain,
  germany,
  italy,
  france,
  malta,
  south_africa,
  japan,
  korea,
  new_zeland,
  australia,
  UNITED_ARAB_EMIRATES,
  PORTUGAL,
  SINGAPORE,
  CHINA,
  COSTA_RICA,
  ASIA,
  EUROPE,
  AFRICA,
  NORTH_AMERICA,
  SOUTH_AMERICA,
  OCEANIA
} from "../models/badges.js";

export default {
  data() {
    return {
      badges: []
    };
  },
  computed: {
    ...mapState({
      current_country: state => state.current_country,
      continent: state => state.continent
    })
  },
  created() {
    const continent = this.continent;
    const country = this.current_country;

    // console.log(country);
    // console.log(country.length);

    const badges = [];
    // console.log(country);

    if (country.includes("美国")) {
      badges.push(america);

      const index = country.indexOf("美国");
      country.splice(index, 1);
    }

    if (country.includes("加拿大")) {
      badges.push(canada);

      const index = country.indexOf("加拿大");
      country.splice(index, 1);
    }

    if (country.includes("英国")) {
      badges.push(england);

      const index = country.indexOf("英国");
      country.splice(index, 1);
    }

    if (country.includes("爱尔兰")) {
      badges.push(ireland);

      const index = country.indexOf("爱尔兰");
      country.splice(index, 1);
    }

    if (country.includes("西班牙")) {
      badges.push(spain);

      const index = country.indexOf("西班牙");
      country.splice(index, 1);
    }

    if (country.includes("德国")) {
      badges.push(germany);

      const index = country.indexOf("德国");
      country.splice(index, 1);
    }

    if (country.includes("意大利")) {
      badges.push(italy);

      const index = country.indexOf("意大利");
      country.splice(index, 1);
    }

    if (country.includes("法国")) {
      badges.push(france);

      const index = country.indexOf("法国");
      country.splice(index, 1);
    }

    if (country.includes("马耳他")) {
      badges.push(malta);

      const index = country.indexOf("马耳他");
      country.splice(index, 1);
    }

    if (country.includes("南非")) {
      badges.push(south_africa);

      const index = country.indexOf("南非");
      country.splice(index, 1);
    }

    if (country.includes("日本")) {
      badges.push(japan);

      const index = country.indexOf("日本");
      country.splice(index, 1);
    }

    if (country.includes("韩国")) {
      badges.push(korea);

      const index = country.indexOf("韩国");
      country.splice(index, 1);
    }

    if (country.includes("新西兰")) {
      badges.push(new_zeland);

      const index = country.indexOf("新西兰");
      country.splice(index, 1);
    }

    if (country.includes("澳大利亚")) {
      badges.push(australia);

      const index = country.indexOf("澳大利亚");
      country.splice(index, 1);
    }

    if (country.includes("阿联酋")) {
      badges.push(UNITED_ARAB_EMIRATES);

      const index = country.indexOf("阿联酋");
      country.splice(index, 1);
    }

    if (country.includes("葡萄牙")) {
      badges.push(PORTUGAL);

      const index = country.indexOf("葡萄牙");
      country.splice(index, 1);
    }

    if (country.includes("新加坡")) {
      badges.push(SINGAPORE);

      const index = country.indexOf("新加坡");
      country.splice(index, 1);
    }

    if (country.includes("中国")) {
      badges.push(CHINA);

      const index = country.indexOf("中国");
      country.splice(index, 1);
    }

    if (country.includes("哥斯达黎加")) {
      badges.push(COSTA_RICA);

      const index = country.indexOf("哥斯达黎加");
      country.splice(index, 1);
    }

    // console.log(badges);
    // console.log(country);

    if (country.length > 0) {
      country.map(item => {
        continent.map(i => {
          if (i.name === "亚洲") {
            if (i.country.includes(item)) {
              badges.push(ASIA);
            }
          }

          if (i.name === "欧洲") {
            if (i.country.includes(item)) {
              badges.push(EUROPE);
            }
          }

          if (i.name === "非洲") {
            if (i.country.includes(item)) {
              badges.push(AFRICA);
            }
          }

          if (i.name === "北美洲") {
            if (i.country.includes(item)) {
              badges.push(NORTH_AMERICA);
            }
          }

          if (i.name === "南美洲") {
            if (i.country.includes(item)) {
              badges.push(SOUTH_AMERICA);
            }
          }

          if (i.name === "大洋洲") {
            if (i.country.includes(item)) {
              badges.push(OCEANIA);
            }
          }
        });
      });

      // console.log(badges);
      // console.log(country);
    }

    // console.log(badges);
    const current_badges = [...new Set(badges)];

    this.badges = current_badges;
  }
};
</script>

<style lang="less" scoped>
.container-badges {
  width: 100%;
  height: 240px;
  position: relative;

  .badge {
    width: 114px;
    position: absolute;

    img {
      width: 114px;
      height: 100px;
    }
  }

  .badge-0 {
    top: 50px;
    left: 15vw;
    z-index: 1;
  }

  .badge-1 {
    top: 10px;
    left: 40vw;
    z-index: 2;
  }

  .badge-2 {
    top: 110px;
    left: 32vw;
    z-index: 3;
  }

  .badge-3 {
    top: 60px;
    left: 62vw;
    z-index: 4;
  }

  .badge-4 {
    top: 0;
    left: 0;
    z-index: 5;
  }

  .badge-5 {
    top: 140px;
    left: 7vw;
    z-index: 6;
  }

  .badge-6 {
    top: 130px;
    left: 55vw;
    z-index: 7;
  }

  .badge-7 {
    top: -14px;
    left: 63vw;
    z-index: 8;
  }

  .badge-8 {
    top: -4px;
    left: 19vw;
    z-index: 9;
  }

  .badge-9 {
    top: 80px;
    left: -2vw;
    z-index: 10;
  }

  .badge-10 {
    top: 166px;
    left: 22vw;
    z-index: 11;
  }

  .badge-11 {
    top: 58px;
    left: 42vw;
    z-index: 12;
  }

  .badge-12 {
    top: 156px;
    left: 42vw;
    z-index: 13;
  }

  .badge-13 {
    top: 180px;
    left: 65vw;
    z-index: 14;
  }

  .badge-14 {
    top: 90px;
    left: 17vw;
    z-index: 15;
  }

  .badge-15 {
    top: 60px;
    left: 27vw;
    z-index: 16;
  }

  .badge-16 {
    top: -30px;
    left: 34vw;
    z-index: 17;
  }

  .badge-17 {
    top: 9px;
    left: 44vw;
    z-index: 18;
  }

  .badge-18 {
    top: 89px;
    left: 64vw;
    z-index: 19;
  }

  .badge-19 {
    top: 127px;
    left: -9vw;
    z-index: 20;
  }

  .badge-20 {
    top: 157px;
    left: -2vw;
    z-index: 21;
  }

  .badge-21 {
    top: 47px;
    left: 12vw;
    z-index: 22;
  }

  .badge-22 {
    top: -37px;
    left: 7vw;
    z-index: 23;
  }

  .badge-23 {
    top: 7px;
    left: 27vw;
    z-index: 24;
  }

  .badge-24 {
    top: 77px;
    left: 47vw;
    z-index: 25;
  }

  .badge-25 {
    top: 127px;
    left: 29vw;
    z-index: 26;
  }
}
</style>
