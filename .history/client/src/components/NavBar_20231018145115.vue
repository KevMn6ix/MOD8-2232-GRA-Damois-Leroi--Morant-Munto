<script setup>
import { ref } from 'vue'
import LoginPage from '../views/LoginPage.vue'
import TheSubHeader from './TheSubHeader.vue';
const emit = defineEmits(['user-input'])
const UserInput = ref('')
function sendUserInput() {
    console.log(UserInput.value)
    emit('user-input', UserInput.value)
}
</script>
/** This component is hte bar at the top of the screen */
<template>
    <nav id="head-bar">
        <img src="../assets/logoMTL.png">
        <h3>
            MTLSudentSpot
        </h3>
        <input type="text" v-model="UserInput" @input="sendUserInput">
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
    </nav>
    <div id="sub-header">
    <TheSubHeader/></div>
</template>
<style>

:root{

    --color-navbar: #f0f2f5;
    --text-navbar-color-default: #000;
    --color-input: #5c5a5a;
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

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-navbar);
    padding: 1rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: 2px solid var(--button-border);
    margin: 5px;
}

button {
    background-color: var(--color-button);
    color: var(--text-navbar-color-default);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 3px;
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
}

input {
    flex-grow: 3;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--color-input);
    color: var(--text-navbar-color-default);
    border: 2px solid var(--button-border);
    margin: 0 1rem;
}

#sub-header {
    text-align: center;
}
</style>
