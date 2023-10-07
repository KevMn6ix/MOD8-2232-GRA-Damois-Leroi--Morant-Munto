<script setup>

    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import UsePlaceService from '../../server/services/places-service';
    import TheRatingList from '../components/TheRatingList.vue';
    import TheFooter from '../components/TheFooter.vue';
    const placeService = UsePlaceService();
    const placeList = placeService.findPlaces();
    console.log(placeList)
    const route = useRoute()
    const id_place = Number(route.params.id)

    const place = computed(() => {
        return placeList.find((p) => p.Id === id_place);
    });

    const calculateTotalRating = (place) => {

        if (place) {
            const { HygieneRating, AmbianceRating, PriceRating } = place;
            const totalRating = (HygieneRating + AmbianceRating + PriceRating) / 3;

            return totalRating.toFixed(1);
        }
        return 0; 
    };

</script>

<template>
    
    <div>
        <h1>{{ place.Title }}</h1>
        <img :src="place.Picture" alt="Place Image">
        <p>{{ place.Address }}</p>

        <!-- Display ratings -->
        <div>
            <h2>Ratings</h2>
            <p>Hygiene Rating: {{ place.HygieneRating }}</p>
            <p>Ambiance Rating: {{ place.AmbianceRating }}</p>
            <p>Price Rating: {{ place.PriceRating }}</p>
            <!-- Add other ratings as needed -->
        </div>

        <!-- Display total rating (calculate it if needed) -->
        <div>
            <h2>Total Rating</h2>
            <p>{{ calculateTotalRating(place) }}</p>
        </div>
        <div>
            <router-link :to="'/places/review/' + place.Id" name='placereview'> review</router-link>
        </div>
        <TheRatingList :idOfPlace="place.Id"/>
    </div>
    <TheFooter/>
</template>