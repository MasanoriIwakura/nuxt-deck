<template>
  <div>
    <v-toolbar class="blue darken-2">
      <v-toolbar-title class="title white--text">
        Nuxt Deck
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" class="white--text">
          Top
        </v-btn>
        <v-btn flat to="/deck" class="white--text">
          Deck
        </v-btn>
        <v-btn flat to="/audience" class="white--text">
          Audience
        </v-btn>
        <v-btn flat href="https://ja.nuxtjs.org/" target="_blank" class="white--text">
          Nuxt.js公式
        </v-btn>
        <v-btn flat href="https://github.com/MasanoriIwakura/nuxt-deck" target="_blank">
          <img src="/images/GitHub-Mark-32px.png" alt="">
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

