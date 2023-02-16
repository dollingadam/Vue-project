<script>
export default {
  data() {
    return {
        counter: this.currentValue
    }
  },
  methods: {
    onClick(){
        this.counter++
    }
  },
  props: {
    currentValue: Number
  }

}</script>
<template>

    <div class="question">

<input class="btn btn-primary" type="button" @click="onClick" :value="counter"></div>


</template>
<style scoped>
    .question{
        text-align: center;
        padding-bottom: 1vh;

    }
    .btn {
        width: 4rem;
    }
</style>
