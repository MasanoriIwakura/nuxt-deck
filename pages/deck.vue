<template lang='pug'>
#MyFirstSlideshow
  .eg-slideshow
    slide
      h2 Nuxt.jsとFirebaseについて
      p.
        〜冬休みを利用して作ってみた〜
      br
      img(src="/images/deck/nuxt-logo.png")
      img(src="/images/deck/firebase-logo.png")
      p.
        Presented by Masanori Iwakura

    slide(enter='bounceInRight' leave='fadeOut')
      h3 Nuxt.jsとは？
      img(src="/images/deck/nuxt-logo.png")
      p.
        Nuxt.js は Vue アプリケーションを作成するフレームワーク
    
    slide(enter='bounceInDown' leave='fadeOut')
      h3 そもそもVue.jsって？
      img(src="/images/deck/vue-logo.png")
      p.
        ※ビュージェイエス　と読みます
    
    slide(enter='bounceInDown')
      h4 "コンポーネント(部品)"を組み合わせて作る
      h4(enter='bounceInDown' ) 再利用性の高いJavaScriptフレームワーク
    
    slide
      p.
        ユニバーサルアプリケーション、静的に生成されるアプリケーション、
      p. 
        シングルページアプリケーションの中から作成するアプリケーションを選ぶことができます。

    slide(enter='fadeIn')
      h3 Want cool effects?
      p.
        Code your own, or try stealing for the other slideshows !
</template>

<style scoped>
.eg-slideshow {
  text-align: center;
}
</style>

<script>
import eagle from 'eagle.js'

export default {
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