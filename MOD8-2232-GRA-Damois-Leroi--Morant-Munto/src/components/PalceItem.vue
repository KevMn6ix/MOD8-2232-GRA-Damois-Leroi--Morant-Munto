<script>
const placeSpecificity = defineProps({
    rating: Number,
    id: Number
})
</script>
<template>
    <RouterLink :to="'/places/' + placeSpecificity.id">
    <slot name="picture">
    </slot>
    <slot name="title">
    </slot>
    <slot name="rating">

    </slot>
    <div v-if="placeSpecificity.rating=5">
        *****
    </div>
    <div v-else-if="placeSpecificity.rating=4">
        ****
    </div>
    <div v-else-if="placeSpecificity.rating=3">
        ***
    </div>
    <div v-else-if="placeSpecificity.rating=2">
        **
    </div>
    <div v-else-if="placeSpecificity.rating=1">
        **
    </div>
    <div v-else>
        0
    </div>
    </RouterLink> 
</template>