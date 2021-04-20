<template>
  <div class="container">
    <the-data />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheData from '~/components/TheData.vue'

export default Vue.extend({
  components: {
    TheData,
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
</style>
