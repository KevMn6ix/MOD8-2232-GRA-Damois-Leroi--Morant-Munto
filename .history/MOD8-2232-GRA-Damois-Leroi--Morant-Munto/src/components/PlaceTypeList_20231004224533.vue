<script setup>

    import PlaceItem from './PlaceItem.vue'
    import { computed } from 'vue'

    const propsList = defineProps({
        type: String,
        placeArray: Object
    })

    const searchresults = computed(() => {

        const type = this.$route.params.types;

        return this.propsList.placeArray.filter((place) => {
            return place.Type === type;
        });

    })
</script>

<template>


    <ul>
        <li v-for="place in searchresults">
            <PlaceItem :id="place.Id" :rating="place.Rating">



            </PlaceItem>
        </li>
    </ul>


</template>