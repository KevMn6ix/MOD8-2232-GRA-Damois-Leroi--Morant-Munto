<script setup>

    import PlaceItem from './PlaceItem.vue'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router';

    const { type, placeArray } = defineProps({
        type: String,
        placeArray: Object
    });

    


    const route = useRoute();   
    const type_local = route.params.types;

    const searchresults = placeArray.filter((place) => {
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
