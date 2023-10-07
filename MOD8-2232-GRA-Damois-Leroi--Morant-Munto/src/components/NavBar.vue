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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    align-items: center;
    flex-grow: 3;
    min-width: 178px;
    gap: 20px;
}
button {
    color: black;
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