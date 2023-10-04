<script>
    import PlaceItem from '../components/PlaceItem.vue'; // Import your PlaceItem component here

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
            // Simulate a database response
            ];
            break;
        case 'activities':
            this.loadedPlaces = [
            // Simulate a database response
            ];
            break;
        case 'travel':
            this.loadedPlaces = [
            // Simulate a database response
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