<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <button>
      <RouterLink to="/places/add"> Click here !</RouterLink>
    </button>
</template>
<style scoped>
:root {
  --light-color-background-restaurant: #A5BDD9;
    --light-color-background-travel: #a2c4ec;
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
p {
    min-width: 333px;
    text-align: center;
    size: 50%;
    padding: 0;
    margin: 0;
}
</style>