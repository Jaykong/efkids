<template>
  <div class="container-badges">
    <!-- <div
      v-for="item in badges"
      :key="item"
      class="badge badge-1"
    >
      <img :src="item" />
    </div> -->

    <div class="badge badge-0">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-1">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-2">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-3">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-4">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-5">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-6">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-7">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-8">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-9">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-10">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-11">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-12">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-13">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-14">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-15">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-16">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-17">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-18">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-19">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-20">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-21">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-22">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-23">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-24">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-25">
      <img src="../assets/badges/AFRICA.png" />
    </div>
    <div class="badge badge-26">
      <img src="../assets/badges/AFRICA.png" />
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
  }
}
</style>
