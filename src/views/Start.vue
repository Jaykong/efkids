<template>
  <div class="container">
    <van-row type="flex">
      <van-col class="cell-logo">
        <img class="logo" src="../assets/images/efLogo_start.png" />
      </van-col>
    </van-row>

    <van-row class="cell-btn" type="flex" justify="center">
      <van-col>
        <router-link to="/selectcountry">
          <img class="enter-btn" src="../assets/images/enterBtn.png" />
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

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
