<script setup>
    import PlaceItem from './PlaceItem.vue';
    import { ref, computed, routes } from 'vue';


    const propsList = defineProps({
        placetype: String,
        placeArray: Object
    })

    computed : {

        

    }

    const filteredPlaces = ref([]);
</script>

<template>

    <ul>

        <li v-for="place in propsList.placeArray.filer((p) => {} )">
        </li>
    </ul>

</template>