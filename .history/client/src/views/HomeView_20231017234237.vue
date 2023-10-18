<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue';
import RowLandingPage from '../components/RowLandingPage.vue';
import PlaceList from '../components/PlaceList.vue';
import { RouterLink} from 'vue-router'
import UsePlaceService from '../../server/services/places-service.js';
const userInput = ref('');
const placeService = UsePlaceService();
console.log(placeService.findPlaces())
const tempListPlace = placeService.findPlace()
console.log(tempListPlace)
</script>

<template>
  <header>
    <NavBar @user-input="(termInputed) => {userInput = termInputed;}"/>
  </header>
  <main id="home-body">
    <div v-if="userInput === ''">
    <h1>
      Visit the most beautiful places with MTL<br>Student Spot !
    </h1>
    <ul id="browse">
      <li id="travel"><RouterLink :to="{name : 'PlacesList', params : {types: 'travel'}}"><RowLandingPage textId="travel" textTitle="Travel"/></RouterLink></li>
      <li id="restaurant"><RouterLink :to="{name : 'PlacesList', params : {types: 'restaurants'}}"><RowLandingPage textId="restaurant" textTitle="Restaurant"/></RouterLink></li>
      <li id="activity"><RouterLink :to="{name : 'PlacesList', params : {types: 'activities'}}"><RowLandingPage textId="activity" textTitle="Activity"/></RouterLink></li>
  </ul>
  </div>
  <div v-else id="research">
    <PlaceList :searchTerms="userInput" :placeArray="placeService.findPlaces()"/>
  </div>
  </main>
</template>
<style >
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
template {
    
    
    color: black;
    @media (prefers-color-scheme: dark) {
        color: white;
    }
}

main {
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
}
header {
  padding-top: 1%;
  padding-bottom: 1%;
}
@media (prefers-color-scheme: dark) {
    }
    header {
  background-color: var(--color-background-restaurant);
}
h1 {
  text-align: center;
  min-width: 189px;
}
#browse li {
  /*
  display: flex;*/
  padding: 6%;
  
}
@media (min-width: 500px) {
  #browse li {
    padding: 3%;
  }
}
@media (min-height: 500px) {
  #browse li {
    padding: 3%;
  }
}
ul {
  list-style-type: none;
  /*
  justify-content: flex-start;
  */
  padding: 0;
  text-decoration: none;
  max-height: 100px;
}
#restaurant {
  background-color: var(--color-background-restaurant);
  justify-self: start;
  text-align: end;
  
}
#travel {
  background-color: var(--color-background-travel);
  
}
#activity {
  background-color: var(--color-background-activity);
  
}
#research {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#research li {
  padding: 1%;
}
</style>
