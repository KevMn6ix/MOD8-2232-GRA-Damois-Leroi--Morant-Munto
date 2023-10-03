<script setup>
import { ref } from 'vue'
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
        <button>
            Log In
        </button>
        <button>
            Sign In
        </button>
    </nav>
</template>
<style>
img {
    margin-top: 4%;
    width: 10%;
    height: 50%;
    padding-right: 1%;
    padding-left: 1%;
}
h3 {
    padding-top: 5%;
}
#head-bar {
    --light-color-background: #a2c4ec;
    --dark-color-background: #52649c;
    background-color: var(--light-color-background);
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -1%;
    height: 10%;
    display: flex;
    @media (prefers-color-scheme: dark) {
        background-color: var(--dark-color-background);
    }   
}
input {
    margin-top: 5%;
    margin-bottom: 5%;
}
button {
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>