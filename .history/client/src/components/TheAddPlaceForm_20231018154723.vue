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
    <label>
        Place's name
    </label>
    <AddPlaceInput type="text" @user-input="(termInputed) => {UserInput.Title = termInputed}">
        
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
        <option value="activity">Activity</option>
        <option value="travel">Travel</option> 
    </select>
    <button @click="sendUserInput">
        Submit
    </button>
</div>
    </div>
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

* {
    min-width: 333px;
    
}
#form-body >* {
  
    display: flex;
    flex-direction: column;
    color: white;
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