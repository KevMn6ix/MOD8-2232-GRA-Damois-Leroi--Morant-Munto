<script setup>
import UsePlaceService from '../../server/services/places-service';
import RatingItem from './RatingItem.vue';
const servicePlace = UsePlaceService()
const propEntered = defineProps({
    idOfPlace: Number
})
/*
console.log(servicePlace.findRatings())
console.log(servicePlace.findRatingsAbout(propEntered.idOfPlace))
*/
</script>
<template>
    <h2>
        Rating
    </h2>
    <ul> 
        <li v-for="rate of servicePlace.findRatingsAbout(propEntered.idOfPlace)">
            <RatingItem>
                <template #place-name>
                    {{ servicePlace.findPlace(idOfPlace).Title }} 
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