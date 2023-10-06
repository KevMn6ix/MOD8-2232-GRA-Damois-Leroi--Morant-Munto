<script setup>
import { ref } from 'vue'
import AddPlaceInput from './AddPlaceInput.vue';
const emit = defineEmits(['user-input'])
const UserInput = ref({
    Type: '', 
    Title: '', 
    Address: '', 
    Picture: ''
})
function sendUserInput() {
    console.log(UserInput.value)
    emit('user-input', UserInput.value)
}
function displayUserInput() {
    console.log(UserInput.value)
}
</script>
<template>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Title = termInputed}">
        Place's name
    </AddPlaceInput>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Address = termInputed}">
        Place's address
    </AddPlaceInput>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Picture = termInputed}">
        Place's link to a picture
    </AddPlaceInput>
    <br>
    <label for="palce-type">
        Select the type of place
    </label>
    <select name="place-type" v-model="UserInput.Type">
        <option value="restaurant">Restaurant</option>
        <option value="Activity">activity</option>
        <option value="travel">travel</option> 
    </select>
    <br>
    <button @click="displayUserInput">
        Click me
    </button>
    <button @click="sendUserInput">
        Submit
    </button>
</template>