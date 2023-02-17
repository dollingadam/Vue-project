<script>
export default {
  data() {
    return {

    }
  },

}


  </script>
<template>
    <div class="cont">
    <h6>Click on the button to join our fan base!</h6>
    <p class="inl">Current #AvsLoyals: </p>
    <input class="btn btn-primary" type="button" @click="$store.commit('increase', 1)" :value="$store.state.counter"></div>
</template>
<style scoped>
.inl {
    display: inline;
}

.cont {
    margin-top: 10vh;
    text-align: center;
}</style>
