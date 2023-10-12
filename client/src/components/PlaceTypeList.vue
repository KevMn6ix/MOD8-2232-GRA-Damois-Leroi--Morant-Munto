<script setup>

    import PlaceItem from './PlaceItem.vue'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router';
    import UsePlaceService from '../../server/services/places-service';
    const { type, placeArray } = defineProps({
        type: String,
        placeArray: Object
    });

    


    const route = useRoute();   
    const type_local = route.params.types;

    const searchresults = UsePlaceService().findPlaces().filter((place) => {
        console.log(place);
        console.log(place.Type);
        console.log(place.Type === type_local);
        console.log(type_local);
        return place.Type === type_local;
    });

  
</script>

<template>


    <ul>
        <li v-for="place in searchresults">
            <PlaceItem :rating="place.Rating" :id="place.Id">

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
