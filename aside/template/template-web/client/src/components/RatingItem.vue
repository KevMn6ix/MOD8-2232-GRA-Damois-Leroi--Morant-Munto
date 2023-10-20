<template>
    <div id="rating-item">
    <slot name="place-name">
    </slot>
    <slot name="hygiene-rating">
    </slot>
    <slot name="price-rating">
    </slot>
    <slot name="ambiance-rating">
    </slot>
    <slot name="comment-rating">
    </slot>
    </div>
</template>
<style scoped>
#rating-item { 
    border: solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 5%;
    margin-right: 5%;
    min-width: 252px;
}
@media (prefers-color-scheme: dark) {
    #rating-item
    {
        border: solid white;
    }
}

</style>