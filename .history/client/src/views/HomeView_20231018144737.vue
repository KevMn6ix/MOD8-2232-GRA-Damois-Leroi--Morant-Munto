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
  <footer>
    <a href="#" aria-label="SoundCloud">
        <i class="footer-icon">🎵</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Twitter">
        <i class="footer-icon">🐦</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="YouTube">
        <i class="footer-icon">▶️</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Instagram">
        <i class="footer-icon">📷</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
    <a href="#" aria-label="Facebook">
        <i class="footer-icon">📘</i>  <!-- Emoji used as placeholder for your icons -->
    </a>
  </footer>

</template>
<style scoped>
body, html {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

:root {
    --color-background-header: #A5BDD9;
    --color-background-default: #A5BDD9;
    --color-background-travel: #a2c4ec;
    --color-background-activity: #9EB3CB;
    --text-color-default: #FFF;
    --border-color-place: #FFF;
    
}

/* Dark Mode Variables */
@media (prefers-color-scheme: dark) {
    :root {
        --color-background-header: #A5BDD9;  /* Adjusted for contrast in dark mode */
        --text-color-default: #FFF;
        --border-color-place: #000;
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1); 
}

header > div:last-child {
    display: flex;
    gap: 1rem;  
   
    a, button {
        padding: 0.5rem 1rem;  
        border-radius: 0.25rem;  
        transition: background-color 0.3s ease;  
        text-decoration: none;  
    }

    button {
        background-color: var(--color-background-travel);  
        color: #FFF;
        border: none;  
        cursor: pointer;  
    }

    a {
        color: var(--text-color-default);  
    }

    button:hover, a:hover {
        background-color: #7faedc;  
    }
}

/* Main content styles */
main {
    
    background-color: var(--color-background-default);
    text-align: center;
    padding: 2rem 0;
    color: var(--text-color-default);
}

#home-body {
    
    border-radius: 20px;
    background-image: url('../assets/montrealbynight.jpg');
    background-size: 1520px; 
    background-repeat: repeat;  
    background-position: 30%;  
    position: relative;
    z-index: 1;
}

#home-body::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(2, 7, 16, 0.84);  
    z-index: -1;  
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: white;
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
  margin: 0px;  
  border: 8px solid #fff;
 
  border-bottom: 0px;
  transition: background-color 0.3s ease;
  height: 350px;
  background-size: cover;
  display: flex;
  justify-content: center; 
  align-items: center;    
  font-weight: bold;       
             
}

ul#browse li#activity{

    border-bottom: 8px solid #fff;

}

@media (prefers-color-scheme: dark){

    ul#browse li{

        border: 8px solid #5c5a5a;

    }

    ul#browse li#activity{

        border-bottom: 8px solid #5c5a5a;

    }

}

ul#browse li > * {
    color: black;
    font-weight: bold;
    width: 100%;  
    text-align: center;  
}

#travel > *{
    text-align: left;  
}

#restaurant > *{
    text-align: right;  
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
    opacity: 0.40; 
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
    background-image: url('../assets/jetski.jpg');
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
  z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    
    left: 0;
    width: 100%;
    background-color: #1a1a1a;  
    padding: 10px 0;
}

.footer-icon {
    font-size: 24px; 
    color: white; 
    transition: 0.3s; 
}

footer a:hover .footer-icon {
    color: #A5BDD9;  
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
