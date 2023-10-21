<script>
import { onMounted,ref } from 'vue';

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
            console.log()
            for (let i = 1; i < 6; i++) {
                console.log('this is the content of stary')
                console.log(i)
                console.log((document.getElementById(this.$props.category + i).src).split("etoileMTL"))
                document.getElementById(this.$props.category +i).src = i > rating ?  ((document.getElementById(this.$props.category + i).src).split("etoileMTL")[0] + "etoileMTLempty.png") : ((document.getElementById(this.$props.category + i).src).split("etoileMTL")[0] + "etoileMTL.png");
                console.log(i <= rating ? "../assets/etoileMTLempty.png" : "../assets/etoileMTL.png")
            }
            this.$emit('rate', rating);
            
        },
    },
};



</script>

<template>
    <div>
        <span v-for="star in 5" :key="star" @click="rate(star)">
            <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"><img :id="category + star" src="../assets/etoileMTLempty.png" alt="*"></i>
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