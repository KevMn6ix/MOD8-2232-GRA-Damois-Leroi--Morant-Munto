<script>
    import PlaceList from '../components/placelist.vue'; // Import your PlaceItem component here

    export default {
    components: {
      PlaceList,
    },
    data() {
        return {
        pageTitle: 'Places Page',
        loadedPlaces: [], 
        };
    },
    created() {
        // Access the type parameter from the URL
        const types = this.$route.params.types;

        // Simulate loading places based on the 'type' parameter
        switch (types) {
          case 'restaurant':
              this.loadedPlaces = [
              { id: 3, name: 'Activity 1', rating: 3 },
              { id: 4, name: 'Activity 2', rating: 2 },
              ];
              break;
          case 'activity':
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
      <!-- Display Places -->
      <div v-if="loadedPlaces.length > 0">
        
          <!-- Customize the slots as needed -->
        {{ console.log(loadedPlaces) }}
      </div>
      <div v-else>
        <p>No places to display.</p>
      </div>
    </div>
</template>