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