<script setup>
import PlaceItem from './PlaceItem.vue';
const propsList = defineProps({
    searchTerms: String,
    placeArray: Object
})
</script>
/** this is a component to display every place */
<template>
    <h1>
        Search For ...
    </h1>
    <ul>
        <li v-for="place in propsList.placeArray.filter((p) => { 
            console.log(p);
            return ((p.Title.substring(0, propsList.searchTerms.length)).toLowerCase() === propsList.searchTerms.toLowerCase())})">
            <PlaceItem :id="place.id" :rating="place.Rating">
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
ul {
    list-style-type: none;
}
header {
    position: static;
    top: 0;
    padding: 0;
    margin: 0;
}
</style>