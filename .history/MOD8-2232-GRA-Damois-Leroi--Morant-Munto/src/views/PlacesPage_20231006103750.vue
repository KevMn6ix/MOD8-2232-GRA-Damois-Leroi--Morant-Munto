<script setup>

    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const placeList = ref([
        { Id: ++id.value, Type: "restaurant", Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" },
        { Id: ++id.value, Type: "restaurant", Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2 },
        { Id: ++id.value, Type: "activity", Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2 },
        { Id: ++id.value, Type: "travel", Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture: "https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg" }
    ]);

    const route = useRoute()
    const id = Number(route.params.id)

    const place = computed(() => {
        return placeList.value.find((p) => p.Id === id);
    });

    const calculateTotalRating = (place) => {

        if (place) {
            const { HygieneRating, AmbianceRating, PriceRating } = place;
            return (HygieneRating + AmbianceRating + PriceRating) / 3;
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
    </div>

</template>