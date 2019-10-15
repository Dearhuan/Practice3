<template>
  <div class="cotn_principal">
    <div class="cont_centrar">
      <div class="cont_login">
        <div class="cont_info_log_sign_up">
          <div class="col_md_login">
            <div class="cont_ba_opcitiy">
              <h2>登录</h2>
              <p>欢迎登录</p>
              <button class="btn_login" @click="cambiar_login">登录</button>
            </div>
          </div>
          <div class="col_md_sign_up">
            <div class="cont_ba_opcitiy">
              <h2>注册</h2>
              <p>欢迎注册</p>
              <button class="btn_sign_up" @click="cambiar_sign_up">注册</button>
            </div>
          </div>
        </div>
        <div class="cont_back_info">
          <div class="cont_img_back_grey">
            <img src="../assets/po.jpg" alt />
          </div>
        </div>
        <div class="cont_forms">
          <div class="cont_img_back_">
            <img src="../assets/po.jpg" alt />
          </div>
          <div class="cont_form_login">
            <a href="#" @click="ocultar_login_sign_up">
              <i class="material-icons">←</i>
            </a>
            <h2>登录</h2>
            <input type="text" placeholder="用户名" v-model="account" />
            <input type="password" placeholder="密码" v-model="password" />
            <button class="btn_login" @click="login">登录</button>
          </div>
          <div class="cont_form_sign_up">
            <a href="#" @click="ocultar_login_sign_up">
              <i class="material-icons">←</i>
            </a>
            <h2>注册</h2>
            <input type="text" placeholder="用户名" v-model="account" />
            <input type="text" placeholder="邮箱" />
            <input type="password" placeholder="密码" v-model="password" />
            <input type="password" placeholder="确认密码" />
            <button class="btn_sign_up" @click="register">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      let params = {
        account: this.account,
        password: this.password
      };
      this.$http
        .post("/api/user/login", params)
        .then(response => {
          console.log(response);
          var message = response.body.message;
          if (response.body.status === 1000) {
            message = response.body.data[0].account + " " + message;
          }
          alert(message);
        })
        .catch(reject => {
          console.log(reject);
        });
    },
    register() {
      let params = {
        account: this.account,
        password: this.password
      };
      this.$http
        .post("/api/user/register", params)
        .then(response => {
          console.log(response);
          var message = response.body.message;
          if (response.body.status === 1000) {
            message = this.account + " " + message;
          }
          alert(message);
        })
        .catch(reject => {
          console.log(reject);
        });
    },
    getAllAccount() {
      console.log("call getAllAccount");
      this.$http
        .get("/api/user/all")
        .then(response => {
          console.log(response);
        })
        .catch(reject => {
          console.log(reject);
        });
    },
    cambiar_login() {
      document.querySelector(".cont_forms").className =
        "cont_forms cont_forms_active_login";
      document.querySelector(".cont_form_login").style.display = "block";
      document.querySelector(".cont_form_sign_up").style.opacity = "0";

      setTimeout(function() {
        document.querySelector(".cont_form_login").style.opacity = "1";
      }, 400);

      setTimeout(function() {
        document.querySelector(".cont_form_sign_up").style.display = "none";
      }, 200);
    },
    cambiar_sign_up(at) {
      document.querySelector(".cont_forms").className =
        "cont_forms cont_forms_active_sign_up";
      document.querySelector(".cont_form_sign_up").style.display = "block";
      document.querySelector(".cont_form_login").style.opacity = "0";

      setTimeout(function() {
        document.querySelector(".cont_form_sign_up").style.opacity = "1";
      }, 100);

      setTimeout(function() {
        document.querySelector(".cont_form_login").style.display = "none";
      }, 400);
    },
    ocultar_login_sign_up() {
      document.querySelector(".cont_forms").className = "cont_forms";
      document.querySelector(".cont_form_sign_up").style.opacity = "0";
      document.querySelector(".cont_form_login").style.opacity = "0";

      setTimeout(function() {
        document.querySelector(".cont_form_sign_up").style.display = "none";
        document.querySelector(".cont_form_login").style.display = "none";
      }, 500);
    }
  }
};
</script>

<style scoped>
  @import "../assets/style.css";
</style>
