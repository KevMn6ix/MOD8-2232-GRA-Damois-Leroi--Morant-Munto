<script setup>
  import PlaceList from '../components/PlaceList.vue';
  import PlaceTypeList from '../components/PlaceTypeList.vue';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import BarOutsideHome from '../components/BarOutsideHome.vue'
  const id = ref(0);
  const placeList = ref([
    { Id: ++id.value, Type: "restaurant", Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" },
    { Id: ++id.value, Type: "restaurant", Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2 },
    { Id: ++id.value, Type: "activity", Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2 },
    { Id: ++id.value, Type: "travel", Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture: "https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg" }
  ]);

  const pageTitle = 'Places Page';
  let loadedPlaces = [];

  // Access the type parameter from the URL
  const route = useRoute();
  const types = route.params.types;

  // Simulate loading places based on the 'type' parameter
  switch (types) {
    case 'restaurant':
      loadedPlaces = [
        { id: 3, name: 'Activity 1', rating: 3 },
        { id: 4, name: 'Activity 2', rating: 2 },
      ];
      break;
    case 'activity':
      // Simulate a database response
      break;
    case 'travel':
      // Simulate a database response
      break;
    default:
      loadedPlaces = [];
  }
  
</script>
/** the purpose of this view is to display list of of all the place corresponding to a specific type*/
<template>
  <header>
    <BarOutsideHome/>
  </header>
    <div>
      <h1>{{ pageTitle }}</h1>
      <!-- Display Places -->
      <div v-if="placeList.length > 0">
        
        <PlaceTypeList :type = "types" :placeArray="placeList"/>
      
      </div>
      <div v-else>
        <p>No places to display</p>
      </div>
    </div>
</template>