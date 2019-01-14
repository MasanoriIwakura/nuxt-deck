<template>
  <div v-html="$md.render(mdText)"></div>
</template>

<style scoped>
img { width: 100%; }
</style>


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