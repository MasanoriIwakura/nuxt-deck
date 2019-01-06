<template>
  <div class="audience">
    <v-layout>
      <v-flex xs12>
        <v-card class="mx-auto" style="max-width: 1000px;">
          <v-textarea auto-grow box color="light-blue" label="コメント" rows="2" v-model="comment"></v-textarea>
          <v-card-actions>
            <v-flex xs6>
              <v-btn class="blue lighten-2" dark large @click="addComment">投稿</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn class="blue lighten-2" dark large @click="addLike">
                <v-icon>thumb_up</v-icon>いいね！
              </v-btn>
            </v-flex>
          </v-card-actions>
          <comment/>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.audience {
  margin-top: 2em;
}
</style>

<script>
import Comment from '~/components/Comment.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Comment
  },
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    addLike () {
      this.$store.dispatch('addLike')
    },
    addComment () {
      if (this.comment) {
        this.$store.dispatch('addComment', this.comment)
        this.comment = ''
      }
    }
  }
}
</script>