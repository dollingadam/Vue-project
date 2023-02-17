<script setup>
import HeroImage from '../components/HeroImage.vue'
import NewsLetter from '../components/NewsLetter.vue'
import QuestionPlayoffs from '../components/QuestionPlayoffs.vue'
import QuickQuestion from '../components/QuickQuestion.vue'
import FanBase from '../components/FanBase.vue'
</script>
<template>
    <HeroImage/>
    <NewsLetter/>
    <h2>Who do you not want the Avs to play against in the playoffs?</h2>
    <h5>Minnesota Wild</h5>
    <QuestionPlayoffs :current-value="44"/>
    <h5>Vegas Golden Nights</h5>
    <QuestionPlayoffs :current-value="85"/>
    <h5>Edmonton Oilers</h5>
    <QuestionPlayoffs :current-value="2"/>
    <h5>Dallas Stars</h5>
    <QuestionPlayoffs :current-value="159"/>
    <FanBase/>
    <QuickQuestion/>

    </template>
    <style scoped>
h5, h2{
    text-align: center;
}
h2{
    padding-bottom: 3vh;
}</style>
