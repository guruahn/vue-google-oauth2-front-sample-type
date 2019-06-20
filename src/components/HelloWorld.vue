<template>
  <div class="hello">
    <button @click="handleClickLogin" :disabled="!isInit">get authCode</button>
    <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">sign in</button>
    <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">sign out</button>
    <p>isInit: {{isInit}}</p>
    <p>isSignIn: {{isSignIn}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  /* eslint-disable */
  @Prop() private msg!: string;
  private isSignIn = false;
  private isInit = false;

  private handleClickLogin() {
    this.$gAuth
      .getAuthCode()
      .then((authCode: string) => {
        /* eslint-disable */
        console.log("authCode", authCode);
      })
      .catch((error: any) => {
        // on fail do something
      });
  }

  private handleClickSignIn() {
    this.$gAuth
      .signIn()
      .then((GoogleUser: any) => {
        /* eslint-disable */
        console.log("GoogleUser", GoogleUser);
        console.log("getId", GoogleUser.getId());
        console.log("getBasicProfile", GoogleUser.getBasicProfile());
        console.log("getBasicProfile", GoogleUser.getBasicProfile());
        console.log("getAuthResponse", GoogleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        );
        this.isSignIn = this.$gAuth.isAuthorized;
      })
      .catch((error: any) => {
        // on fail do something
      });
  }

  private handleClickSignOut() {
    this.$gAuth
      .signOut()
      .then(() => {
        // on success do something
        this.isSignIn = this.$gAuth.isAuthorized;
      })
      .catch((error: any) => {
        // on fail do something
      });
  }

  private created() {
    const that = this;
    const checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) {
        clearInterval(checkGauthLoad);
      }
    }, 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
