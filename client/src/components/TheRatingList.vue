<script setup>
import UsePlaceService from '../../server/services/places-service';
import RatingItem from './RatingItem.vue';
const servicePlace = UsePlaceService()
import { ref,onMounted } from 'vue';
const propEntered = defineProps({
    idOfPlace: Number
})
/*
console.log(servicePlace.findRatings())
console.log(servicePlace.getRating(propEntered.idOfPlace))
*/
const allTheRating = ref([])
const essaie = ref({})
essaie.value = propEntered
console.log("the id of the place seleceted")
console.log(propEntered.idOfPlace)
onMounted(
    async () => {
         allTheRating.value = await servicePlace.findRatingsAbout(propEntered.idOfPlace);

        console.log(allTheRating.value)
    }
)
const place = ref({})

onMounted(
    async () => {
        place.value = await servicePlace.findPlace(propEntered.idOfPlace);
        console.log(place.value)
    }
)
</script>
<template>
    <h2>
        Rating {{ propEntered.idOfPlace }}
    </h2>
    <ul>
        <li v-for="rate of allTheRating">
            <RatingItem>
                <template #place-name>
                    {{ place.Title }} 
                </template>
                <template #price-rating>
                    {{ rate.PriceRating }}/5
                </template>
                <template #ambiance-rating>
                    {{ rate.AmbianceRating }}/5
                </template>
                <template #hygiene-rating>
                    {{ rate.HygieneRating }}/5
                </template>
                <template #comment-rating>
                    {{ rate.CommentRate }}
                </template>
            </RatingItem>
        </li>
    </ul>
</template>