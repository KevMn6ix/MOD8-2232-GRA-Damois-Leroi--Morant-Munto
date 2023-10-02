<script setup>
import { ref } from 'vue'
const emit = defineEmits(['user-input'])
const UserInput = ref('')
function sendUserInput() {
    emit('user-input', UserInput.value)
}
</script>
<template>
    <nav>
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
* {
    background-color: aqua;
}
</style>