<script setup>
const placeSpecificity = defineProps({
    rating: Number,
    id: Number
})
</script>
/** this component is used for display any kind place */
<template>
    <section id="window">
    <RouterLink  :to="'/places/' + placeSpecificity.id">
        <slot name="picture" id="picture">
    </slot>
    <p>
    <slot name="title" id="title">
    </slot>
    &nbsp;
    <slot name="address" id="address">
    </slot>
</p>
    <div v-if="placeSpecificity.rating=5">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
    </div>
    <div v-else-if="placeSpecificity.rating=4">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div v-else-if="placeSpecificity.rating=3">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div v-else-if="placeSpecificity.rating=2">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div v-else-if="placeSpecificity.rating=1">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div v-else>
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    </RouterLink>
    </section>
</template>
<style scoped>
* {
    color: black;
    @media (prefers-color-scheme: dark) {
        color: white;
    }
}
template {
    display: inline-block;
    
}
#window {
    border: solid black;
    @media (prefers-color-scheme: dark) {
        border: solid white;
    }
}
</style>