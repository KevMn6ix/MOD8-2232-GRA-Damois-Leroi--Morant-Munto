<script>

export default {
    name: 'StarRating',
    props:["category"],
    data() {
        return {
            rating: '',
        };
    },
    methods: {
        rate(rating)  {
            this.$emit('rate', rating);
        },
    },
};
</script>

<template>
    <div>
        <span v-for="star in 5" :key="star" @click="rate(star)">
            <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'">*</i>
        </span>
    </div>

</template>

<style>

span {
    cursor: pointer; 
}

.fas .fa-star {
    color: gold;
}

.far.fa-star{
    color: lightgray;
}

i {
    font-size: 45px;
}

</style>