<script setup>
/** this prop purpose to to display one of the solid color row on the landing page*/
import { RouterLink } from 'vue-router';

const rowProps = defineProps({
    textClass: String,
    textType: String
})
</script>
<template>
    <RouterLink :to="/places/ + rowProps.textType">
    <h2 :class="rowProps.textClass">
        <slot>
        </slot>
    </h2>
    </RouterLink>
</template>
<style scoped>
root {
    --light-color-background-restaurant: #a2c4ec;
    --light-color-background-travel: #A5BDD9;
    --light-color-background-activity: #9EB3CB;
    --dark-color-background-restaurant: #a2c4ec9d;
    --dark-color-background-travel: #a5bdd971;
    --dark-color-background-activity: #9eb3cb0e;
    --color-background-restaurant: var(--light-color-background-restaurant);
    --color-background-travel: var(--light-color-background-travel);
    --color-background-activity: var(--light-color-background-activity);
    @media (prefers-color-scheme: dark) {
        --color-background-restaurant: var(--dark-color-background-restaurant);
        --color-background-travel: var(--dark-color-background-travel);
        --color-background-activity: var(--dark-color-background-activity);
    }
}
template {
    width: 100%;
    height: 5cm;
}
#travel {
    background-color: var(--color-background-travel);
}
#restaurant {
    background-color: var(--color-background-restaurant);
}
#activitty {
    background-color: var(--color-background-activity);
}
</style>