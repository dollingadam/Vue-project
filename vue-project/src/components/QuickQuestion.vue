<script>
export default {
  data() {
    return {
        msg: 'Yes',
        text: ''
    }
  },
  methods: {
    onQuickQuestion(){

        this.$emit('quick-question')
    },
    onQuickQuestion() {
        this.msg = 'Great!'
    }
  },
  watch: {
    text(){
      console.log(this.text)
    }
  }

}</script>
<template>
  <div class="cont">
    <h6>You doing OK today?</h6>
    <input class="btn btn-primary" type="button" :value="msg" @click="onQuickQuestion">
    <input class="text" type="text" v-model="text" placeholder="Write and check your console log..."></div>


</template>
<style scoped>
.cont {
  text-align: center;
  margin: 10vh;
}
.text {
  width: 20%;
  margin-left: 2vw;
}
</style>
