<template>
  <div class="container">
    <van-row type="flex" justify="center">
      <van-col class="cell-text">
        <img
          class="select-text"
          src="../assets/images/select_footprint_text.png"
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col class="cell-country" span="22">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            v-for="item in continent"
            :key="item.name"
            :title="item.name"
            :name="item.name"
          >
            <van-button
              v-for="i in item.country"
              :key="i"
              class="item"
              size="small"
              :type="current_country.includes(i) ? 'primary' : 'default'"
              @click="onSelect(item.name, i)"
              >{{ i }}</van-button
            >
          </van-collapse-item>
        </van-collapse>
      </van-col>
    </van-row>

    <van-row class="cell-btn" type="flex" justify="center">
      <van-col>
        <img
          @click="onSubmit"
          class="country-btn"
          src="../assets/images/submitBtn.png"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "vant";

export default {
  data() {
    return {
      activeNames: ["亚洲"]
    };
  },
  computed: {
    ...mapState({
      continent: state => state.continent,
      current_country: state => state.current_country
    })
  },
  methods: {
    onSelect(name, i) {
      const item = { name, country: i };
      this.$store.commit("onSelectCountry", item);
    },
    onSubmit() {
      if (this.current_country.length === 0) {
        Toast.fail({
          message: "您还没有选择足迹",
          duration: 1500
        });
      } else {
        this.$router.push("/upload");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/commonBg.png") no-repeat center;
  background-size: cover;

  .cell-text {
    margin-top: 60px;

    .select-text {
      width: 120px;
    }
  }

  .cell-country {
    height: 60vh;
    background: #fff;
    margin-top: 5vh;
    border-radius: 8px;
    padding: 8px;
    overflow-y: scroll;

    .item {
      width: 88px;
      margin: 4px;
    }
  }

  .cell-btn {
    margin-top: 5vh;

    .country-btn {
      width: 128px;
    }
  }
}
</style>
