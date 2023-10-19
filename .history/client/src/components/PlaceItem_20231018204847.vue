<script setup>
const placeSpecificity = defineProps({
    rating: Number,
    id: Number,
    type: String
})
</script>
/** this component is used for display any kind place */
<template>
    <section id="window">
    <RouterLink  :to="{name : 'PlacePage', params : {types :placeSpecificity.type, id: placeSpecificity.id }}">
        <div id="big-div">
        <slot name="picture" id="picture">
    </slot>
    <div>
    <slot name="title" id="title">
        
    </slot>
    <br>
    <div id="id-address">
    <slot name="address" id="address">
    </slot></div>
</div>
    <div class="picture" v-if="placeSpecificity.Rating===5">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
    </div>
    <div class="picture" v-else-if="placeSpecificity.Rating===4">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div class="picture" v-else-if="placeSpecificity.Rating===3">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div class="picture" v-else-if="placeSpecificity.Rating===2">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div class="picture" v-else-if="placeSpecificity.Rating===1">
        <img src="../assets/etoileMTL.png" alt="*">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
    <div class="picture" v-else>
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
        <img src="../assets/etoileMTLempty.png" alt="0">
    </div>
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
#big-div {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    @media (max-width: 400) {
        gap: 0;
        justify-content: center;
    }
}
id-address {
    display: inline-block;
}
.picture {
    display: flex;
    flex-wrap: nowrap;
    align-items: end;
    padding-right: 0;
    margin-right: 0;
}
#window {
    border: solid black;
    display: flex;
    justify-content: center;
    padding: 0;
    min-width: 330px;
    @media (max-width: 400px) {
        margin: 0;
        padding: 1%;
        font-size: 75%;
    }
    /*margin-left: 10%;*/
    @media (prefers-color-scheme: dark) {
        border: solid white;
    }
    
}
@media (max-width: 400px) {
        img {
            min-width: 5px;
            min-height: 7px;
            width: 1%;
            height: 1%;
        }
    }
</style>