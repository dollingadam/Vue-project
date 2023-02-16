<script>
export default {
  data() {
    return {
        msg: 'Yes'
    }
  },
  methods: {
    onQuickQuestion(){

        this.$emit('quick-question')
    },
    onQuickQuestion() {
        this.msg = 'Great!'
    }
  }

}</script>
<template>
    <h2>You doing OK today?</h2>
    <input class="btn btn-primary" type="button" :value="msg" @click="onQuickQuestion">

    <p></p>
</template>
<style scoped></style>
