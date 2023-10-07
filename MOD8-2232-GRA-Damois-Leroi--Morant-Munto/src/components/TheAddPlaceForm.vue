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
    <div id="form-body">
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Title = termInputed}">
        Place's name
    </AddPlaceInput>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Address = termInputed}">
        Place's address
    </AddPlaceInput>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Picture = termInputed}">
        Place's link to a picture
    </AddPlaceInput>
    
    <label for="place-type">
        Select the type of place
    </label>
    <div id="form-nested-body">
    <select name="place-type" v-model="UserInput.Type">
        <option value="restaurant">Restaurant</option>
        <option value="Activity">activity</option>
        <option value="travel">travel</option> 
    </select>
    <button @click="sendUserInput">
        Submit
    </button>
</div>
    </div>
</template>
<style scoped>
* {
    min-width: 333px;
    
}
#form-body {
    background-color: var(--color-background-activity);
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: center;
    @media (prefers-color-scheme: dark) {
        color: white;
    }
}
button {
    min-width: 50px;
    width: 15%;
    margin-left: 42.5%;
    flex-shrink: 3;
}
select {
    min-width: 30px;
    width: 30%;
}
label {
    text-align: center;
}
#form-nested-body {
    display: flex;
    flex-direction: column;
      
}
select {
    margin-left: 35%; 
}
</style>