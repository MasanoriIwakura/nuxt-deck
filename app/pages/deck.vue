<template>
  <div class="deck">
    <v-container fluid>
      <v-layout row>
        <v-flex xs11>
          <slide v-for="slide in slideData" :key="slide.id" v-bind:enter='slide.enter' :mouseNavigation='false'>
            <div class="page">
              {{slide.id}}
            </div>
            <md v-bind:src="slide.src"/>
          </slide>
        </v-flex>
        <v-flex xs3>
          <comment/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.deck {
  text-align: center;
  height: 50px;
  table-layout:fixed;
}
.page {
  text-align: left;
}
pre code {
  text-align: left;
}
</style>

<script>
import Comment from '~/components/Comment.vue'
import Md from '~/components/Md.vue'
import eagle from 'eagle.js'

export default {
  components: {
    Comment,
    Md
  },
  mixins: [ eagle.slideshow ],
  infos: {
    title: 'Nuxt Deck',
    description: 'Nuxt.jsについて',
    path: 'deck'
  },
  data() {
    return {
      // 今回は配列で持つが、サーバーから取得することも可能
      slideData: [
        {id: 1, src: '/markdown/slide1.md', enter: 'bounceInRight', leave: ''},
        {id: 2, src: '/markdown/slide2.md', enter: 'bounceInRight', leave: ''},
        {id: 3, src: '/markdown/slide3.md', enter: 'bounceInDown', leave: ''},
        {id: 4, src: '/markdown/slide4.md', enter: 'bounceInRight', leave: ''},
        {id: 5, src: '/markdown/slide5.md', enter: 'bounceInRight', leave: ''},
        {id: 6, src: '/markdown/slide6.md', enter: '', leave: ''},
        {id: 7, src: '/markdown/slide7.md', enter: '', leave: ''},
        {id: 8, src: '/markdown/slide8.md', enter: 'bounceInDown', leave: ''},
        {id: 9, src: '/markdown/slide9.md', enter: 'flash', leave: ''},
        {id: 10, src: '/markdown/slide10.md', enter: 'bounceInRight', leave: ''},
        {id: 11, src: '/markdown/slide11.md', enter: 'flash', leave: ''},
        {id: 12, src: '/markdown/slide12.md', enter: '', leave: ''},
        {id: 13, src: '/markdown/slide13.md', enter: 'bounceInRight', leave: ''},
        {id: 14, src: '/markdown/slide14.md', enter: '', leave: ''},
        {id: 15, src: '/markdown/slide15.md', enter: '', leave: ''},
        {id: 16, src: '/markdown/slide16.md', enter: '', leave: ''},
        {id: 17, src: '/markdown/slide17.md', enter: 'rubberBand', leave: ''},
        {id: 18, src: '/markdown/slide18.md', enter: 'swing', leave: ''},
        {id: 19, src: '/markdown/slide19.md', enter: '', leave: ''},
        {id: 20, src: '/markdown/slide20.md', enter: 'jello', leave: ''},
        {id: 21, src: '/markdown/slide21.md', enter: 'bounceInRight', leave: ''},
        {id: 22, src: '/markdown/slide22.md', enter: 'bounceInLeft', leave: ''},
        {id: 23, src: '/markdown/slide23.md', enter: 'zoomIn', leave: ''},
        {id: 24, src: '/markdown/slide24.md', enter: 'zoomInUp', leave: ''},
        {id: 25, src: '/markdown/last.md', enter: '', leave: ''},
      ]
    }
  }
}
</script>