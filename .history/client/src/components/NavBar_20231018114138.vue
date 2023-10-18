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
        <button>
            <router-link to='/login'>Log In</router-link>
        </button>
        <button>
            <router-link to="/register">Sign In</router-link>
        </button>
    </div>
    </nav>
    <div id="sub-header">
    <TheSubHeader/></div>
</template>
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-background-header);
    padding: 1rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

button {
    background-color: var(--color-background-travel);
    color: #FFF;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #7faedc;
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
    background-color: var(--text-color-default);
    color: var(--text-color-default);
    margin: 0 1rem;
}

#sub-header {
    text-align: center;
}
</style>
