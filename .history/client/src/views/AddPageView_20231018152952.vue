<script setup>
import { RouterLink } from 'vue-router';
import TheAddPlaceForm from '../components/TheAddPlaceForm.vue';
import  BarOutsideHome from '../components/BarOutsideHome.vue';
import UsePlaceService from '../../server/services/places-service.js';
const placeService = UsePlaceService()
</script>
<template>
    <header>
        <BarOutsideHome/>
    </header>
    <main>
    <h1>
        Reference any place you like to hang out
    </h1>
    <TheAddPlaceForm @user-input="(termInputed) => {placeService.addPlace(termInputed.Title, termInputed.Address, termInputed.Type, termInputed.Picture); console.log(UsePlaceService().findPlaces())}"/>
    </main>
    <footer>
    <a href="#" aria-label="SoundCloud">
        <i class="footer-icon">🎵</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Twitter">
        <i class="footer-icon">🐦</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="YouTube">
        <i class="footer-icon">▶️</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Instagram">
        <i class="footer-icon">📷</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Facebook">
        <i class="footer-icon">📘</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
  </footer>
</template>
<style scoped>
*{
    min-width: 333px;
}
</style>