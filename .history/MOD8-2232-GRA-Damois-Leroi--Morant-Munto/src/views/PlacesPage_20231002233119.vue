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
    <div>
      <h1>{{ pageTitle }}</h1>
  
      <!-- Display Places -->
      <div v-if="loadedPlaces.length > 0">
        <PlaceItem
          v-for="(place, index) in loadedPlaces"
          :key="index"
          :rating="place.rating"
          :id="place.id"
        >
          <!-- Customize the slots as needed -->
        </PlaceItem>
      </div>
      <div v-else>
        <p>No places to display.</p>
      </div>
    </div>
  </template>