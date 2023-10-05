<script setup>

    import PlaceItem from './PlaceItem.vue'
    import { computed } from 'vue'

    const propsList = defineProps({
        type: String,
        placeArray: Object
    })

    const searchresults = computed(() => {

        const type = this.$route.params.type;

    })
</script>

<template>



</template>