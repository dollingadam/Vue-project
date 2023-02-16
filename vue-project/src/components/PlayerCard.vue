<script>


export default {
  data() {
    return {
     players: [],
     imageSource: '/img/${player.image}'
    }
  },
  created(){
      fetch('data.json')
      .then ((response) => (response.json())
      .then((result) => {
        this.players = result
      })
      )}
}

</script>
<template>
<div class="grid-cards mt-3">
 <div class="container card mb-3" style="max-width: 540px;"  v-for="player in players">
  <div class="row g-0">
    <div class="col-sm">
      <img :src="imageSource" class="img-fluid rounded-start" alt="..." >
    </div>
    <div class="col-sm">
      <div class="card-body">
        <h5 class="card-title">{{player.name}}</h5>
        <p class="card-text">Number: {{player.number}}</p>

      </div>
    </div>
  </div>
</div>
</div>
<nav>
  <ul><li><router-link to="/players/Kurtis MacDermid">Click here to see another player</router-link></li></ul>
</nav>
<h2>{{$route.params.id}}</h2>
</template>

<style scoped>

body
    {
    background-color: green
}
img {
    width: 100%;
    height: 100%;
}
.grid-cards {
    display: flex;
    flex-wrap: wrap;
    margin: 2em;
    padding-top: 10vh;

}
</style>
