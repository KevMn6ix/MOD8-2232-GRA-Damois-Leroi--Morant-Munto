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
        <div>
        <button>
            Log In
        </button>
        <button>
            Sign In
        </button>
    </div>
    </nav>
    <router-link to="/places/review" name='placereview'> review</router-link>
</template>
<style>
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
img {
    margin-left: 3px;
    height: 20px;
    width: 16px;
}
input {
    flex-grow: 3;
}
</style>