<template>
  <div class="comment">
    <v-card color="blue lighten-3">
      <v-card-title>
        <font size="-1">Comments</font>
        <v-icon style="margin-left:2em; margin-right:1em;">thumb_up</v-icon>
        <font>{{ likes }}</font>
      </v-card-title>
      <div class="scroll">
        <v-list dense>
          <v-list-tile v-for="comment in comments" :key="comment" class="list">
            <v-list-tile-content>{{ comment }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.scroll {
  max-height: 400px;
  overflow-y: auto;
}
.list {
  border-bottom: 1px solid #99CCFF;
}
</style>


<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    comments () { return this.$store.getters.reverseComments },
    likes () { return this.$store.state.likes.length }
  },
  created () {
    this.$store.dispatch('init')
  }
}
</script>
