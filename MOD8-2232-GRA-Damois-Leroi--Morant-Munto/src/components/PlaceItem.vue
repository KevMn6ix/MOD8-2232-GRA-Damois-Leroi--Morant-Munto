<script>
const placeSpecificity = defineProps({
    rating: Number,
    id: Number
})
</script>
/** this component is used for display any kind place */
<template>
    <RouterLink :to="'/places/' + placeSpecificity.id"> 
        /**Slot for the picture */
    <slot name="picture">
    </slot>
    /** slot for the place's name */
    <slot name="title">
    </slot>
    <slot name="address">
    </slot>
    /** slot for the place rating*/
    /** depending on the general rating a different amount of   sterix is displayed and a 0 if there is none */
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