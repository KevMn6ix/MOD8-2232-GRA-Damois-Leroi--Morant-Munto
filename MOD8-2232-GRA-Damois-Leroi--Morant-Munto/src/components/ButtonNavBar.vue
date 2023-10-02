<script setup>
import { ref } from 'vue'
const emit = defineEmits(['user-input'])
function RestaurantPressed() {
    emit('user-input', 'restaurant');
    document.getElementById('restaurant').setAttribute("class", "pressed");
    document.getElementById('travel').setAttribute("class", "unpressed");
    document.getElementById('activity').setAttribute("class", "unpressed");
}
function TravelPressed() {
    emit('user-input', 'travel');
    document.getElementById('travel').setAttribute("class", "pressed");
    document.getElementById('restaurant').setAttribute("class", "unpressed");
    document.getElementById('activity').setAttribute("class", "unpressed");
}
function ActivityPressed() {
    emit('user-input', 'activity');
    document.getElementById('activity').setAttribute("class", "pressed");
    document.getElementById('travel').setAttribute("class", "unpressed");
    document.getElementById('restaurant').setAttribute("class", "unpressed");
}
</script>
<template>
    <nav>
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
#unpressed {
    color: var(--color-text);
    background-color: var(--color-background);
}
#unpressed {
    color: var(--color-text);
    background-color: var(--color-background-selected);
}
</style>