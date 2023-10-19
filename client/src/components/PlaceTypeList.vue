<script setup>

import PlaceItem from './PlaceItem.vue'
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import UsePlaceService from '../../server/services/places-service';
import AuthentificationService from '@/services/AuthentificationService';

const { type, placeArray } = defineProps({
    type: String,
    placeArray: Object
});

const route = useRoute();
const type_local = ref('');
type_local.value = route.params.types;

const getTypeForPage = computed(() => {
    switch (type_local.value) {
        case 'restaurant':
            return 'Restaurant';
        case 'activity':
            return 'Activity';
        case 'travel':
            return 'Travel';
        default:
            return ''; // Gérer les cas où le type ne correspond à aucun de ceux attendus
    }
});

console.log(getTypeForPage.value)
const places = ref();

onMounted(() => {
    fetchPlaces();
});
 
async function fetchPlaces() {
    const response = await AuthentificationService.findPlaces();
    places.value = response.data
}

</script>

<template>
    <ul>
        <li v-for="place in places">
            <p v-if="place.place_type === getTypeForPage">
                <PlaceItem :rating="place.Rating" :id="place.place_id">
                    <template #picture>
                        <img :src="place.photo_url" alt="place's picture">
                    </template>
                    <template #title>
                        {{ place.place_name }}
                    </template>
                    <template #address>
                        {{ place.place_address }}
                    </template>
                </PlaceItem>
            </p>
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
    list-style: none;
}

@media (max-width: 387) {
    ul li {
        width: 300px;
    }

}
</style>
