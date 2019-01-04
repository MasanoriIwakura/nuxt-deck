<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="title">
        <nuxt-link to="/">Nuxt Deck</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <nuxt-link to="/deck">Deck</nuxt-link>
        </v-btn>
        <v-btn flat>
          <a href="https://ja.nuxtjs.org/" target="_blank">
            Nuxt.js公式
          </a>
        </v-btn>
        <v-btn flat>
          <a href="https://github.com/MasanoriIwakura/nuxt-deck" target="_blank">
            <img src="/images/GitHub-Mark-32px.png" alt="">
          </a>
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

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

