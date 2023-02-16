<script>
import axios from 'axios';

export default {
  data() {
    return {
     players: []
    }
  },


 mounted() {

axios.get('data.json')
.then(response => (this.players = response.data))
},


      }



</script>
<template>

  <h2>Stats for the 2022/23 season</h2>
    <caption>Skaters</caption>
    <table class="table table-striped table-hover table-stats table-stats-main" >

  <thead >
    <tr >
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Goals</th>
      <th scope="col">Assists</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody v-for="player in players">
    <tr>
      <th scope="row">{{ player.number }}</th>
      <td>{{player.name}}</td>
      <td>{{player.goals}}</td>
      <td>{{ player.assists }}</td>
      <td>{{ player.total }}</td>
    </tr>

  </tbody>

</table>
<caption>Goalies</caption>
<table class="table table-striped table-hover table-stats" >

<thead >

  <tr >
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Games played</th>
    <th scope="col">Wins</th>
    <th scope="col">GAA</th>
    <th scope="col">SV%</th>

  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Alexandar Georgiev</td>
    <td>36</td>
    <td>21</td>
    <td>2.68</td>
    <td>.917</td>

  </tr>
  <tr>
    <th scope="row">39</th>
    <td>Pavel Francouz</td>
    <td>15</td>
    <td>7</td>
    <td>2.53</td>
    <td>.919</td>

  </tr>

</tbody>

</table>
<div class="space"></div>
</template>

<style scoped>
.table-stats{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 70vh;
}

caption {

  text-align: center;
  padding-left: 50vw;
  padding-top: 10vh;
}
h2{
  text-align: center;
  padding-top: 10vh;
}
.table-stats-main{
  padding-bottom: 20vh;
}

.space{
  height: 4em;
}</style>
