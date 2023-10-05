<script setup>

    import PlaceItem from './PlaceItem.vue'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router';

    const propsList = defineProps({
        type: String,
        placeArray: Object
    })

    const searchresults = computed(() => {


        const route = useRoute();   
        const type = route.params.types;

        return this.propsList.placeArray.filter((place) => {
            return place.Type === type;
        });

    })
</script>

<template>


    <ul>
        <li v-for="place in searchresults">
            <PlaceItem :id="place.Id" :rating="place.Rating">

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