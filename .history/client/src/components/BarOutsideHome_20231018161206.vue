<script setup>
import { ref } from 'vue'
import LoginPage from '../views/LoginPage.vue'
import { RouterLink } from 'vue-router';
import TheSubHeader from './TheSubHeader.vue';
const emit = defineEmits(['user-input'])
const UserInput = ref('')
function sendUserInput() {
    console.log(UserInput.value)
    emit('user-input', UserInput.value)
}
</script>
/** This component is the bar at the top of the screen */
<template>
    <header>
    <nav id="head-bar">
        <img src="../assets/logoMTL.png">
        <RouterLink to="/">
        <h3>
            MTLSudentSpot
        </h3>
        </RouterLink>
       
        <div>
        <router-link to='/login'>
        <button>
            Log In
        </button>
        </router-link>
        <router-link to="/register">
        <button>
           Sign In
        </button>
    </router-link>
    </div>
    
    <div id="sub-header">
<TheSubHeader/></div>
</nav>
</header>

</template>
<style scoped>

:root{

--color-navbar: #9fbad4;
--text-navbar-color-default: #000;
--color-input: #9fbad4;
--button-border: #646464;
--color-button: #fff;
--button-hover: #7faedc;
}

@media (prefers-color-scheme: dark){

:root{

    --text-navbar-color-default: #FFF;
    --color-navbar: #211f1f;
    --color-input: #312e2e;
    --button-border: #646464;
    --color-button: #312e2e;
    --button-hover: #646464;

}

}

header{

    background-color: blue;

}

#head-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--color-navbar);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
}

h3{

color: var(--text-navbar-color-default);

}

button {
    background-color: var(--color-button);
    color: var(--text-navbar-color-default);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 2px solid var(--button-border);
}

button:hover {
    background-color: var(--button-hover);
}

button:visited {
    color: white; /* Set the text color to yellow when the button is active (clicked) */
}

img {
    height: 20px;
    width: 16px;
    margin-left: 3px;
}

input {
    flex-grow: 3;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--color-background-default);
    color: var(--text-color-default);
    margin: 0 1rem;
}

#sub-header {
    text-align: center;
}
</style>
