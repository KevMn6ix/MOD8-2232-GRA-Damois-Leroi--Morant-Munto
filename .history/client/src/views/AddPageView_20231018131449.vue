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
    <h1>
        Reference any place you like to hang out
    </h1>
    <TheAddPlaceForm @user-input="(termInputed) => {placeService.addPlace(termInputed.Title, termInputed.Address, termInputed.Type, termInputed.Picture); console.log(UsePlaceService().findPlaces())}"/>
</template>
<style scoped>
*{
    min-width: 333px;
}

header >*{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--color-background-header);
    color: var(--text-color-default);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1); 
}

header > div:last-child {
    display: flex;
    gap: 1rem;  
   
    a, button {
        padding: 0.5rem 1rem;  
        border-radius: 0.25rem;  
        transition: background-color 0.3s ease;  
        text-decoration: none;  
    }

    button {
        background-color: var(--color-background-travel);  
        color: #FFF;
        border: none;  
        cursor: pointer;  
    }

    a {
        color: var(--text-color-default);  
    }

    button:hover, a:hover {
        background-color: #7faedc;  
    }
}
</style>