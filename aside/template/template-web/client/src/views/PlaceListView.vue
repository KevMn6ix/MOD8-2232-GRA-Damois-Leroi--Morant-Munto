<script setup>
import PlaceList from '../components/PlaceList.vue';
import PlaceTypeList from '../components/PlaceTypeList.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import BarOutsideHome from '../components/BarOutsideHome.vue'
import UsePlaceService from '../services/places-service';
const id = ref(0);
const placeService = UsePlaceService()
//const placeList = UsePlaceService().findPlaces();
const placeList = ref([])
onMounted(
  async () => {
    placeList.value = await placeService.findPlaces();
    console.log('the content of the placeList.value')
    console.log(placeList.value)
  }
)
const pageTitle = 'Places Page';
let loadedPlaces = [];

// Access the type parameter from the URL
const route = useRoute();
const types = route.params.types;

// Simulate loading places based on the 'type' parameter
switch (types) {
  case 'restaurant':
    /*
    loadedPlaces = [
      { id: 3, name: 'Activity 1', rating: 3 },
      { id: 4, name: 'Activity 2', rating: 2 },
    ];*/
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
    <BarOutsideHome />
  </header>
  <div>
    <h1>{{ pageTitle }}</h1>
    <!-- Display Places -->
    <div v-if="placeList.length > 0">
      <PlaceTypeList :type="types" :placeArray="placeList" />
    </div>
    <div v-else>
      <p>No places to display</p>
    </div>

  </div>
</template>