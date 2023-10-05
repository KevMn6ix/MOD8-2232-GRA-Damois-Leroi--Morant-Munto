<script setup>
    import PlaceItem from './PlaceItem.vue';
    import { ref, computed } from 'vue';


    const propsList = defineProps({
        placetype: String,
        placeArray: Object
    })

    computed : {

        type = $route.params.types;

    }

    const filteredPlaces = ref([]);
</script>

<template>

    <ul>

        <li v-for="place in propsList.placeArray.filer((p) => {} )">
        </li>
    </ul>

</template>