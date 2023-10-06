<script setup>
import PlaceItem from './PlaceItem.vue';
import UsePlaceService from '../../server/services/places-service';
const propsList = defineProps({
    searchTerms: String,
    placeArray: Object
})
const placeService = UsePlaceService()
</script>
/** this is a component to display every place */
<template>
    <h1>
        Search For ...
    </h1>
    <ul>
        <li v-for="place in placeService.findPlaces().filter((p) => { 
            return ((p.Title.substring(0, propsList.searchTerms.length)).toLowerCase() === propsList.searchTerms.toLowerCase())})">
            <PlaceItem :id="place.Id" :rating="place.Rating" :type="place.Type">
                <template #picture>
                    <img :src="place.Picture" alt="place's picture">
                </template>
                <template #title>
                    {{ place.Title }}
                </template>
                <template #address>
                    {{ place.Address }}
                </template>
            </PlaceItem>
        </li>
    </ul>
</template>
<style scoped>
img {
    height: 175px;
    width: 175px;
}
@media (max-width: 555px) {
    img {
        height: 50px;
        width: 50px;
    }   
}
ul {
    display: flex;
    flex-direction: column;
}
@media (max-width: 387) {
    ul li {
        width: 300px;
    }
    
}
</style>