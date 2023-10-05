<script>
    import PlaceList from '../components/PlaceList.vue'; // Import your PlaceItem component here
    import { ref } from 'vue';

    const placeList = ref([
      {Id: ++id.value, Type : "restaurants",Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg"},
      {Id: ++id.value, Type : "restaurant",Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2},
      {Id: ++id.value, Type : "activity",Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2},
      {Id: ++id.value, Type : "travel",Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture:"https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"}
    ])
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
      <div v-if="placeList.length > 0">
        
          <!-- Customize the slots as needed -->
        {{ console.log(placeList) }}
      </div>
      <div v-else>
        <p>No places to display</p>
      </div>
    </div>
</template>