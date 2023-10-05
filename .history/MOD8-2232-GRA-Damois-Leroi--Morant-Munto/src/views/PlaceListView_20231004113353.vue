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
        const type = this.$route.params.types;

        // Simulate loading places based on the 'type' parameter
        switch (type) {
        case 'restaurants':
            this.loadedPlaces = [
            { id: 3, name: 'Activity 1', rating: 3 },
            { id: 4, name: 'Activity 2', rating: 2 },
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
/** the purpose of this view is to display list of of all the place corresponding to a specific type*/
<template>
    <div>
      <h1>{{ pageTitle }}</h1>
      {{ console.log(loadedPlaces) }}
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