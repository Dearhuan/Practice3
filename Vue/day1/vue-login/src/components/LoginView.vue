<template>
  <div class="cotn_principal">
    <div class="cont_centrar">
      <div class="cont_login">
        <div class="cont_info_log_sign_up">
          <div class="col_md_login">
            <div class="cont_ba_opcitiy">
              <h2>登录</h2>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <button class="btn_login" @click="login">登录</button>
            </div>
          </div>
          <div class="col_md_sign_up">
            <div class="cont_ba_opcitiy">
              <h2>注册</h2>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <button class="btn_sign_up" @click="register">注册</button>
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
            <a href="#" onClick="ocultar_login_sign_up()">
              <i class="material-icons">&#xE5C4;</i>
            </a>
            <h2>登录</h2>
            <input type="text" placeholder="Email" v-model="account" />
            <input type="password" placeholder="Password" v-model="password" />
            <button class="btn_login" @click="login">登录</button>
          </div>
          <div class="cont_form_sign_up">
            <a href="#" onClick="ocultar_login_sign_up()">
              <i class="material-icons">&#xE5C4;</i>
            </a>
            <h2>注册</h2>
            <input type="text" placeholder="Email" v-model="account" />
            <input type="text" placeholder="User" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="password" placeholder="Confirm Password" />
            <button class="btn_sign_up" @click="register">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div>
    <input class="form-control" id="input-email" placeholder="用户名" v-model="account" />
    <input
      type="password"
      name="form-control"
      id="input-password"
      placeholder="密码"
      v-model="password"
    />
    <button type="submit" class="btn btn-default" @click="login">登录</button>
    <button type="submit" class="btn btn-default" @click="register">注册</button>
    <button type="submit" class="btn btn-default" @click="getAllAccount">所有账户</button>
  </div>-->
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

<script>
/* function cambiar_login() {
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
}

function cambiar_sign_up(at) {
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
}

function ocultar_login_sign_up() {
  document.querySelector(".cont_forms").className = "cont_forms";
  document.querySelector(".cont_form_sign_up").style.opacity = "0";
  document.querySelector(".cont_form_login").style.opacity = "0";

  setTimeout(function() {
    document.querySelector(".cont_form_sign_up").style.display = "none";
    document.querySelector(".cont_form_login").style.display = "none";
  }, 500);
} */
</script>

<style>
* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: "Lato", sans-serif;
}

.cotn_principal {
  position: absolute;
  width: 100%;
  height: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfd8dc+0,607d8b+100,b0bec5+100 */
  background: #aac4bc; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.cont_centrar {
  position: relative;
  float: left;
  width: 100%;
}

.cont_login {
  position: relative;
  width: 640px;
  left: 50%;
  margin-left: -320px;
}

.cont_back_info {
  position: relative;
  float: left;
  width: 640px;
  height: 280px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.cont_forms {
  position: absolute;
  overflow: hidden;
  top: 100px;
  left: 0px;
  width: 320px;
  height: 280px;
  background-color: #eee;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_login {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 0px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_sign_up {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 320px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_img_back_grey {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
}

.cont_img_back_grey > img {
  width: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.2;
  animation-name: animar_fondo;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.cont_img_back_ {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
}

.cont_img_back_ > img {
  width: 100%;
  opacity: 0.3;
  animation-name: animar_fondo;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.cont_forms_active_login > .cont_img_back_ {
  top: 0px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_sign_up > .cont_img_back_ {
  top: 0px;
  left: -435px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_info_log_sign_up {
  position: absolute;
  width: 640px;
  height: 280px;
  top: 100px;
  z-index: 1;
}

.col_md_login {
  position: relative;
  float: left;
  width: 50%;
}

.col_md_login > h2 {
  font-weight: 400;
  margin-top: 70px;
  color: #757575;
}

.col_md_login > p {
  font-weight: 400;
  margin-top: 15px;
  width: 80%;
  color: #37474f;
}

.btn_login {
  background-color: #ff9800;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}

.col_md_sign_up {
  position: relative;
  float: left;
  width: 50%;
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
  font-weight: 400;
  margin-top: 15px;
  color: #fff;
}
/* ----------------------------------
background text    
------------------------------------
 */
.cont_ba_opcitiy {
  position: relative;
  background-color: rgba(187, 168, 170, 0.79);
  width: 80%;
  border-radius: 3px;
  margin-top: 60px;
  padding: 15px 0px;
}

.btn_sign_up {
  background-color: #f44336;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.cont_forms_active_sign_up {
  z-index: 2;
}

@-webkit-keyframes animar_fondo {
  from {
    -webkit-transform: scale(1) translate(0px);
    -moz-transform: scale(1) translate(0px);
    -ms-transform: scale(1) translate(0px);
    -o-transform: scale(1) translate(0px);
    transform: scale(1) translate(0px);
  }
  to {
    -webkit-transform: scale(1.5) translate(50px);
    -moz-transform: scale(1.5) translate(50px);
    -ms-transform: scale(1.5) translate(50px);
    -o-transform: scale(1.5) translate(50px);
    transform: scale(1.5) translate(50px);
  }
}
@-o-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@-moz-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
.cont_form_login {
  position: absolute;
  opacity: 0;
  display: none;
  width: 320px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_login {
  z-index: 2;
}
.cont_forms_active_login > .cont_form_login {
}

.cont_form_sign_up {
  position: absolute;
  width: 320px;
  float: left;
  opacity: 0;
  display: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_form_sign_up > input {
  text-align: left;
  padding: 15px 5px;
  margin-left: 10px;
  margin-top: 20px;
  width: 260px;
  border: none;
  color: #757575;
}

.cont_form_sign_up > h2 {
  margin-top: 50px;
  font-weight: 400;
  color: #757575;
}

.cont_form_login > input {
  padding: 15px 5px;
  margin-left: 10px;
  margin-top: 20px;
  width: 260px;
  border: none;
  text-align: left;
  color: #757575;
}

.cont_form_login > h2 {
  margin-top: 110px;
  font-weight: 400;
  color: #757575;
}
.cont_form_login > a,
.cont_form_sign_up > a {
  color: #757575;
  position: relative;
  float: left;
  margin: 10px;
  margin-left: 30px;
}
</style>
