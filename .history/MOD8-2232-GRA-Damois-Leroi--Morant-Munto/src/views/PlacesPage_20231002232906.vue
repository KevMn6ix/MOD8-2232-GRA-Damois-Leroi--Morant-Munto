<script>
    import PlaceItem from './PlaceItem.vue'; // Import your PlaceItem component here

    export default {
    components: {
        PlaceItem,
    },
    data() {
        return {
        pageTitle: 'Places Page',
        loadedPlaces: [], // Initialize with an empty array
        };
    },
    created() {
        // Access the type parameter from the URL
        const type = this.$route.params.type;

        // Simulate loading places based on the 'type' parameter
        switch (type) {
        case 'restaurants':
            this.loadedPlaces = [
            { id: 1, name: 'Restaurant 1', rating: 4 },
            { id: 2, name: 'Restaurant 2', rating: 5 },
            ];
            break;
        case 'activities':
            this.loadedPlaces = [
            { id: 3, name: 'Activity 1', rating: 3 },
            { id: 4, name: 'Activity 2', rating: 2 },
            ];
            break;
        case 'travel':
            this.loadedPlaces = [
            { id: 5, name: 'Travel Destination 1', rating: 5 },
            { id: 6, name: 'Travel Destination 2', rating: 4 },
            ];
            break;
        default:
            this.loadedPlaces = [];
        }
    },
    };
</script>

<template>



</template>