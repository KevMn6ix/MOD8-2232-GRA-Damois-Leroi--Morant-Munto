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
    <nav id="head-bar">
        <img src="../assets/logoMTL.png">
        <h3>
            MTLSudentSpot
        </h3>
        <RouterLink to="/">
            Home
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
</nav>
<div id="sub-header">
<TheSubHeader/></div>
</template>
<style>
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-grow: 3;
    min-width: 178px;
    gap: 20px;
}
img {
    margin-left: 3px;
    height: 20px;
    width: 16px;
}
input {
    flex-grow: 3;
}
#sub-header {
    text-align: center;
}
</style>