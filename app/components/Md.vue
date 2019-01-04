<template>
  <div v-html="$md.render(mdText)"></div>
</template>

<script>
import axios from 'axios'

export default {
  props: ["src"],
  data() {
    return {mdText: ''}
  },
  created() {
    axios.get(this.src).then(response => {this.mdText = response.data})
  }
}
</script>