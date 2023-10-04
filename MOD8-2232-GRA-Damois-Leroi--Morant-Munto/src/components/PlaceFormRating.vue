<script>
import StarRating from './StarRating.vue';

export default {
    name: 'PlaceFormRating',
    data() {
        return {
            placeRate : {
                priceRating : '',
                ambianceRating : '',
                hygieneRating : '',
                comment : '',
            },            
            result : '',
        };
    },
    props: {
        place: Object,
        ratePlace: Function
    },
    component: {
        StarRating,
    },
    
    methods: {
        getData(data){
            this.result = data;
            console.log(this.result);
        },

        setPriceRating(data){
            this.placeRate.priceRating = data;
            console.log(this.placeRate)
        },

        setAmbianceRating(data){
            this.placeRate.ambianceRating = data;
            console.log(this.placeRate)
        },

        setHygieneRating(data){
            this.placeRate.hygieneRating = data;
            console.log(this.placeRate)
        }



    },
    components: { StarRating }
}


</script>

<template>
    <div>
        Place name : {{ }}
    </div>    
    <div class="form">
        <form>
            <label id="price">Price Rating</label>
            <StarRating category="priceRating" @rate="setPriceRating($event)" />

            <label id="ambiance">Ambiance Rating</label>
            <StarRating category="ambianceRating" @rate="setAmbianceRating($event)" />
            
            <label id="hygiene">Hygiene Rating</label>
            <StarRating category="hygieneRating" @rate="setHygieneRating($event)" />
        </form>
        <div>
            <label id="comment-section">Leave a Comment</label>
            <textarea placeholder="What do you think about that ?"></textarea>
        </div>
    </div>
</template>

<style>
/*
label {

    margin-bottom: 0.5rem;
}

form {
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;
    margin: auto;
    max-width: 600px;
}*/

body{
    font-size: 13px;
}

.star-rating span{
    display: inline-block;
    color: gold;
    font-size: 2rem;
    position: relative;
}

.star-rating .star-rating-current {
    position: abs;
    
    
    
}

</style>