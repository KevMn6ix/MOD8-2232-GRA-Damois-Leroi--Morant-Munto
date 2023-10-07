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
    color: black;
    @media (prefers-color-scheme: dark) {
        color: white;
    }
}
#travel {
    text-align: start;
}
</style>