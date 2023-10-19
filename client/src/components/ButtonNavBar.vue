/** this funciton may need rework has it is yet to be determined if between three pages and one page with filtering */
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['user-input'])
function RestaurantPressed() {
    /**function to selecct the option to only have the restarant */
    emit('user-input', 'restaurant');
    document.getElementById('restaurant').setAttribute("class", "pressed");
    document.getElementById('travel').setAttribute("class", "unpressed");
    document.getElementById('activity').setAttribute("class", "unpressed");
}
function TravelPressed() { 
    /**function to selecct the option to only have the travel  */
    emit('user-input', 'travel');
    document.getElementById('travel').setAttribute("class", "pressed");
    document.getElementById('restaurant').setAttribute("class", "unpressed");
    document.getElementById('activity').setAttribute("class", "unpressed");
}
function ActivityPressed() {
    /**function to selecct the option to only have the activity  */
    emit('user-input', 'activity');
    document.getElementById('activity').setAttribute("class", "pressed");
    document.getElementById('travel').setAttribute("class", "unpressed");
    document.getElementById('restaurant').setAttribute("class", "unpressed");
}
</script>
<template>
    <nav>
        /** in the case of filtering we use three button*/
        <button id="restaurant" class="unpressed" @click="RestaurantPressed">Restaurant</button>
        <button id="travel" class="unpressed" @click="TravelPressed">Travel</button>
        <button id="activity" class="unpressed" @click="ActivityPressed">Activities</button>
    </nav>
</template>
<style>
root {
    --light-color-background: #d9d9d9;
    --light-color-backgrounud-selected: #a9a9a9;
    --light-color-text: black;
    --dark-color-background: #272727;
    --dark-color-background-selected: #575757;
    --dark-color-text: white;
    --color-background: var(--light-color-background);
    --color-background-selected: var(--light-color-backgrounud-selected);
    --color-text: var(--light-color-text);
    @media (prefers-color-scheme: dark) {
        --color-background: var(--dark-color-background);
        --color-background-selected: var(--dark-color-backgrounud-selected);
        --color-text: var(--dark-color-text);
    }
}
/**style if the button is not pressed */
#unpressed {
    color: var(--color-text);
    background-color: var(--color-background);
}
/**style if the button is pressed */
#unpressed {
    color: var(--color-text);
    background-color: var(--color-background-selected);
}
</style>