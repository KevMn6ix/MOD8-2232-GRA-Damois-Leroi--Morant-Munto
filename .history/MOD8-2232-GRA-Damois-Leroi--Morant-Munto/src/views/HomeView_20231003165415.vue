<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue';
import RowLandingPage from '../components/RowLandingPage.vue';
import PlaceList from '../components/PlaceList.vue';
import { RouterLink} from 'vue-router'
const userInput = ref('');
let id = ref(0);
const placeList = ref([
  {Id: ++id, Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5},
  {Id: ++id, Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2},
  {Id: ++id, Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2}
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
    
    <RouterLink :to="{name : 'PlacesPage', params : {types: 'restaurants'}}">
      <img class="logo" src="../assets/restaurant.jpg" alt="restaurant">
    <RowLandingPage textId="restaurant" textTitle="Restaurant"/>
    </RouterLink>
    
    <RouterLink :to="{name : 'PlacesPage', params : {types: 'restaurants'}}">
      <RowLandingPage textId="travel" textTitle="Travel"/>
    </RouterLink>
    <RowLandingPage textId="activity" textTitle="Activity"/>
  </div>
  <div v-else>
    <PlaceList :searchTerms="userInput" :placeArray="placeList"/>
  </div>
  </main>
</template>
<style>
h1 {
  text-align: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
#home-body {
  margin-top: 8%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
