<script>
export default {
  data() {
    return {

    }
  },

}


  </script>
<template>
    <p>Click here to join our fan base!</p>
    <input type="button" @click="$store.commit('increase', 1)" :value="$store.state.counter">
</template>
<style scoped></style>
