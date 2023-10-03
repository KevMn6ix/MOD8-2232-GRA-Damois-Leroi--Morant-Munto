<script setup>
/** this prop purpose to to display one of the solid color row on the landing page*/
import { RouterLink } from 'vue-router';

const rowProps = defineProps({
    textId: String,
    textTitle: String
})
</script>
<template>
    <RouterLink :to="/places/ + rowProps.textId">
    <h2 :id="rowProps.textId">

        {{ rowProps.textTitle }}
    </h2>
    </RouterLink>
</template>
<style scoped>
* {
    --light-color-background-restaurant: #a2c4ec;
    --light-color-background-travel: #A5BDD9;
    --light-color-background-activity: #9EB3CB;
    --dark-color-background-restaurant: #a2c4ec9d;
    --dark-color-background-travel: #a5bdd971;
    --dark-color-background-activity: #9eb3cb0e;
    --color-background-restaurant: var(--light-color-background-restaurant);
    --color-background-travel: var(--light-color-background-travel);
    --color-background-activity: var(--light-color-background-activity);
    color: black;
    @media (prefers-color-scheme: dark) {
        --color-background-restaurant: var(--dark-color-background-restaurant);
        --color-background-travel: var(--dark-color-background-travel);
        --color-background-activity: var(--dark-color-background-activity);
        color: white;
    }
}
template {
    height: 5cm;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
}
#travel {
    background-color: var(--color-background-travel);
    text-align: left;
    padding-left: 0.5cm;
    margin-right: -10%;
    margin-left: -10%;
    padding: 9%;
}
#restaurant {
    background-color: var(--color-background-restaurant);
    text-align: right;
    padding-right: 0.5cm;
    margin-left: -10%;
    margin-right: -10%;
    padding: 9%;
    margin-top: 10%;
}
#activity {
    background-color: var(--color-background-activity);
    text-align: right;
    padding-right: 0.5cm;
    margin-left: -10%;
    margin-right: -10%;
    padding: 9%;

}
</style>