<template>
  <div class="deck">
    <v-container fluid>
      <v-layout row>
        <v-flex xs11>
          <slide enter='bounceInRight' leave='fadeOut'>
            <md src="/markdown/slide1.md"/>
          </slide>
          <slide enter='bounceInRight' leave='fadeOut'>
            <md src="/markdown/slide2.md"/>
          </slide>
          <slide enter='bounceInDown' leave='fadeOut'>
            <md src="/markdown/slide3.md"/>
          </slide>
          <slide enter='bounceInDown' leave='fadeOut'>
            <md src="/markdown/slide4.md"/>
          </slide>
        </v-flex>
        <v-flex xs3>
          <v-card color="blue lighten-3">
            <v-card-title>
              <font size="-1">Comments</font>
              <v-icon style="margin-left:2em; margin-right:1em;">thumb_up</v-icon>
              <font size="-1">100</font>
            </v-card-title>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Sample</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.deck {
  text-align: center;
  height: 50px;
  table-layout:fixed;
}
</style>

<script>
import Md from '~/components/Md.vue'
import eagle from 'eagle.js'

export default {
  components: {
    Md
  },
  mixins: [ eagle.slideshow ],
  infos: {
    title: 'Nuxt Deck',
    description: 'Nuxt.jsについて',
    path: 'deck'
  },
  asyncData() {
    return {
      title : 'test'
    }
  },
  mounted() {}
}
</script>