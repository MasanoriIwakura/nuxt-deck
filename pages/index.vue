<template>
  <div id="app">
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <section>
          <v-parallax src="/images/top.jpg" height="600" >
            <v-layout column align-center justify-center class="white--text">
              <h1 class="white--text mb-2 display-1 text-xs-center">Nuxt.jsを使用したスライドショー</h1>
              <v-btn class="blue lighten-2 mt-5" dark large href="/deck">プレビュー</v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout column wrap class="my-5" align-center>
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">使用ツール</h2>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12>
                    <v-card class="elevation-0">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Nuxt.js</div>
                      </v-card-title>
                      <v-card-text class="text-xs-center">
                        アプリケーション開発用のVue.js製のフレームワーク
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Vuetify</div>
                      </v-card-title>
                      <v-card-text class="text-xs-center">
                        Vue.jsと相性が良いコンポーネント化されたCSSフレームワーク
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Eagle.js</div>
                      </v-card-title>
                      <v-card-text class="text-xs-center">
                        Vue.jsで構築されたスライドショーのフレームワーク
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Firebase</div>
                      </v-card-title>
                      <v-card-text class="text-xs-center">
                        Google製の mBaaS (mobile Backend as a Service)<br>
                        リアルタイムコメント表示に使用
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text">&copy; {{ new Date().getFullYear() }} MasanoriIwakura</div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
  .title a, a:visited {
    color: black;
    text-decoration: none;
  }
  .top-margin {
    margin-bottom: 1.5em;
  }
</style>

