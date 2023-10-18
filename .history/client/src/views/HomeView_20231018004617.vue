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
body, html {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

:root {
    --color-background-header: #ffffff;
    --color-background-default: #A5BDD9;
    --color-background-travel: #a2c4ec;
    --color-background-activity: #9EB3CB;
    --text-color-default: #000;
}

/* Dark Mode Variables */
@media (prefers-color-scheme: dark) {
    :root {
        --color-background-header: #444;  /* Adjusted for contrast in dark mode */
        --text-color-default: #FFF;
        /* The blue shades remain the same as you wanted */
    }
}

/* Header styles */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--color-background-header);
    color: var(--text-color-default);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header > div {
    display: flex;
    gap: 1rem;
}

/* Main content styles */
main {
    background-color: var(--color-background-default);
    text-align: center;
    padding: 2rem 0;

}

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

ul#browse {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 0;  
}

ul#browse li {
  padding: 0;  
    margin: 0;  
    transition: background-color 0.3s ease;
    height: 350px;
    background-size: cover;
    display: flex;
    justify-content: center; 
    align-items: center;    
    font-weight: bold;       
    color: black;            
}

#restaurant, #travel, #activity {
    background-size: cover;
    position: relative;
}

#restaurant::before, #travel::before, #activity::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: inherit; 
    opacity: 0.38; 
    pointer-events: none;
}


#restaurant {
    background-image: url('../assets/restaurant.jpg');
    background-color: var(--color-background-default);
    background-position: center;
    justify-content: flex-end;
}

#travel {
    background-image: url('../assets/travel.jpg');
    background-color: var(--color-background-travel);
    background-position: center;
    justify-content: flex-start;
}

#activity {
    background-image: url('../assets/activity.jpg');
    background-color: var(--color-background-activity);
    background-position: center;
    justify-content: flex-start;
}

/* Add hover effects */
ul#browse li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Footer styles */
footer {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    color: var(--text-color-default);
}

/* Media Queries for screen size */
@media screen and (max-width: 768px) {  /* For tablets */
    header {
        flex-direction: column;
    }

    ul#browse {
        gap: 0.5rem;
    }

    footer {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 480px) {  /* For mobile phones */
    header > div {
        flex-direction: column;
        gap: 0.5rem;
    }

    h1 {
        font-size: 2rem;
    }

    ul#browse li {
        padding: 0.5rem 0;
    }

    footer {
        flex-direction: column;
    }
}
</style>
