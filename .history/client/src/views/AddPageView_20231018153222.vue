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

main{

    background-image: url('../assets/montrealbynight.jpg');
    background-size: 1520px; 
    background-repeat: repeat;  
    background-position: 30%;  
    position: relative;
    z-index: 1;
    background-color: rgba(2, 7, 16, 1);  

}

footer {
  z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    margin-top: 10px;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;  
    padding: 10px 0;
}

.footer-icon {
    font-size: 24px; 
    color: white; 
    transition: 0.3s; 
}

footer a:hover .footer-icon {
    color: #A5BDD9;  
}
</style>