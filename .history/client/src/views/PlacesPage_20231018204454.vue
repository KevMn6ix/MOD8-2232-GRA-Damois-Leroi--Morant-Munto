<script setup>

    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import UsePlaceService from '../../server/services/places-service';
    import TheRatingList from '../components/TheRatingList.vue';
    import BarOutsideHome from  '../components/BarOutsideHome.vue'
    const placeService = UsePlaceService();
    const placeList = placeService.findPlaces();
    //console.log(placeList)
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
    <header>
        <BarOutsideHome/>
    </header>
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
</template>

<style scoped>
:root {
  --light-color-background-restaurant: #A5BDD9;
  --light-color-background-travel: #a2c4ec;
  --light-color-background-activity: #9EB3CB;
  --dark-color-background-restaurant: #a2c4ec9d;
  --dark-color-background-travel: #a5bdd971;
  --dark-color-background-activity: #9eb3cb0e;
  --color-background-restaurant: var(--light-color-background-restaurant);
  --color-background-travel: var(--light-color-background-travel);
  --color-background-activity: var(--light-color-background-activity);
  @media (prefers-color-scheme: dark) {
    --color-background-restaurant: var(--dark-color-background-restaurant);
    --color-background-travel: var(--dark-color-background-travel);
    --color-background-activity: var(--dark-color-background-activity);
  }
}

img {
  min-width: 75px;
  min-height: 75px;
  height: 75%;
  width: 75%;
  max-width: 200px;
  max-height: 200px;
}

div {
  text-align: center;
  background-color: var(--color-background-travel); /* Background color for other div elements */
}

h1 {
  background-color: var(--color-background-travel); /* Adjust the background color to match other pages */
}

h2 {
  background-color: var(--color-background-restaurant); /* Adjust the background color to match other pages */
}
</style>