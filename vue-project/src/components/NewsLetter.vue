<script>
export default {
  data() {
    return {
        error: false,
        correct: false,
        ifChecked: '',
        mail1: '',
        mail2: '',
        isDisabled: true
    }
  },
computed: {
    subm(){
        if (this.mail1 !== this.mail2) {
            this.error = true
        } else {
            this.correct = true
        }
    }
},
methods: {
    check() {
        this.isDisabled = false
    }
}}</script>

<template>

    <div class="form">
        <h1 class="">Newsletter coming soon!</h1>
        <p>Sign up to get the latest news from the team and players.</p>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="mail1" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email address</label>
    <input v-model="mail2" type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter your email again">
  </div>
  <div class="form-check">
    <input v-model="checking" type="checkbox" class="form-check-input" id="exampleCheck1" @click="check" >
    <label class="form-check-label" for="exampleCheck1">I want the newsletter</label>
  </div>
  <button :disabled="isDisabled" @click="subm" type="button" class="btn btn-primary">Submit</button>
  <p id="err" v-if="error">The email address are not identical.</p>
  <p  v-else-if="correct" class="correct">Thank you! You will recieve our newsletter in the future.</p>
</form>
</div>
</template>

<style scoped>
    #err {
        color: red;
    }
    .form {
        padding: 25vh;
    }

    .form-check {
        padding-top: 2vh
    }
    .correct {
        padding-top: 5vh
    }
</style>
