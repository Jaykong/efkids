<template>
  <div class="container">
    <van-row type="flex" justify="center">
      <van-col class="cell-upload-text">
        <img class="select-text" src="../assets/images/upload_text.png" />
      </van-col>
    </van-row>

    <van-row class="cell-photo" type="flex" justify="center">
      <van-col class="photo">
        <img
          v-if="photo"
          @click="this.onUploadAgain"
          class="my-photo"
          :src="photo"
          width="180"
        />

        <van-uploader v-else :after-read="onRead">
          <van-row
            class="upload-photo"
            type="flex"
            justify="center"
            align="center"
          >
            <van-icon color="#ddd" size="40px" name="photograph" />
          </van-row>
        </van-uploader>
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col class="cell-input-text">
        <img
          class="select-text"
          src="../assets/images/input_nickname_text.png"
        />
      </van-col>
    </van-row>

    <van-row class="cell-input" type="flex" justify="center">
      <van-col>
        <van-cell-group>
          <van-field class="input" v-model="name" />
        </van-cell-group>
      </van-col>
    </van-row>

    <van-row class="cell-btn" type="flex" justify="center" align="center">
      <van-col>
        <img
          @click="onGeneratePost"
          class="upload-btn"
          src="../assets/images/generatePost.png"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "",
      photo: ""
    };
  },
  methods: {
    onRead(file) {
      // console.log(file);
      this.photo = file.content;
    },
    onUploadAgain() {
      this.photo = "";
    },
    onGeneratePost() {
      if (this.photo) {
        if (this.name) {
          this.$store.commit("onGetPhoto", this.photo);
          this.$store.commit("onInputName", this.name);
          this.$router.push("/passport");
        } else {
          Toast.fail({
            message: "您还没有输入宝贝昵称",
            duration: 1500
          });
        }
      } else {
        Toast.fail({
          message: "您还没有上传宝贝照片",
          duration: 1500
        });
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

  .cell-upload-text {
    margin-top: 5vh;

    .select-text {
      width: 180px;
    }
  }

  .cell-photo {
    margin-top: 5vh;

    .photo {
      background: #fff;
      border-radius: 4px;
      width: 180px;
      height: 272px;
      overflow: hidden;

      .upload-photo {
        width: 180px;
        height: 272px;
      }
      .my-photo {
        width: 100%;
      }
    }
  }

  .cell-input-text {
    margin-top: 5vh;

    .select-text {
      width: 112px;
    }
  }

  .cell-input {
    margin-top: 2vh;

    .input {
      width: 240px;
    }
  }

  .cell-btn {
    margin-top: 10vh;

    .upload-btn {
      width: 180px;
    }
  }
}
</style>
