<template>
  <div class="deck">
    <v-container fluid>
      <v-layout row>
        <v-flex xs11>
          <slide v-for="slide in slideData" :key="slide.id" v-bind:enter="slide.enter" :mouseNavigation="false">
            <div class="page">
              {{ slide.id }} / {{ slideData.length }}
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
      slideData: []
    }
  },
  created () {
    // 今回は配列で持つが、サーバーから取得することも可能
    const slide = [
      { src: '/markdown/slide1.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide2.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide3.md', enter: 'bounceInDown', leave: ''},
      { src: '/markdown/slide4.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide5.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide6.md', enter: '', leave: ''},
      { src: '/markdown/slide7.md', enter: '', leave: ''},
      { src: '/markdown/slide8.md', enter: 'bounceInDown', leave: ''},
      { src: '/markdown/slide9.md', enter: 'flash', leave: ''},
      { src: '/markdown/slide10.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide11.md', enter: 'flash', leave: ''},
      { src: '/markdown/slide12.md', enter: '', leave: ''},
      { src: '/markdown/slide13.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide14.md', enter: '', leave: ''},
      { src: '/markdown/slide15.md', enter: '', leave: ''},
      { src: '/markdown/slide16.md', enter: '', leave: ''},
      { src: '/markdown/slide16a.md', enter: '', leave: ''},
      { src: '/markdown/slide16b.md', enter: '', leave: ''},
      { src: '/markdown/slide17.md', enter: 'rubberBand', leave: ''},
      { src: '/markdown/slide18.md', enter: 'swing', leave: ''},
      { src: '/markdown/slide19.md', enter: '', leave: ''},
      { src: '/markdown/slide20.md', enter: 'jello', leave: ''},
      { src: '/markdown/slide21.md', enter: 'bounceInRight', leave: ''},
      { src: '/markdown/slide22.md', enter: 'bounceInLeft', leave: ''},
      { src: '/markdown/slide23.md', enter: 'zoomIn', leave: ''},
      { src: '/markdown/slide24.md', enter: 'zoomInUp', leave: ''},
      { src: '/markdown/last.md', enter: '', leave: ''},
    ]

    // ページ番号(id)採番
    let id = 1
    for (let s of slide) {
      s.id = String(id)
      this.slideData.push(s)
      id++
    }
  }
}
</script>