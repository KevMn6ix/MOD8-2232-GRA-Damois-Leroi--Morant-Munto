<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue';
import RowLandingPage from '../components/RowLandingPage.vue';
import PlaceList from '../components/PlaceList.vue';
import { RouterLink} from 'vue-router'
const userInput = ref('');
let id = ref(0);
const placeList = ref([
  {Id: ++id.value, Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg"},
  {Id: ++id.value, Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id.value, Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id.value, Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture:"https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"}
])
</script>

<template>
  <header>
    <NavBar @user-input="(termInputed) => {userInput = termInputed; console.log(termInputed)}"/>
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
    <PlaceList :searchTerms="userInput" :placeArray="placeList"/>
  </div>

    
  </main>
</template>
<style>
* {
    --light-color-background-restaurant: #a2c4ec;
    --light-color-background-travel: #A5BDD9;
    --light-color-background-activity: #9EB3CB;
    --dark-color-background-restaurant: #a2c4ec9d;
    --dark-color-background-travel: #a5bdd971;
    --dark-color-background-activity: #9eb3cb0e;
    --color-background-restaurant: var(--light-color-background-restaurant);
    --color-background-travel: var(--light-color-background-travel);
    --color-background-activity: var(--light-color-background-activity);
    color: black;
    

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
  * {
        --color-background-restaurant: var(--dark-color-background-restaurant);
        --color-background-travel: var(--dark-color-background-travel);
        --color-background-activity: var(--dark-color-background-activity);
        color: white;
      }
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
