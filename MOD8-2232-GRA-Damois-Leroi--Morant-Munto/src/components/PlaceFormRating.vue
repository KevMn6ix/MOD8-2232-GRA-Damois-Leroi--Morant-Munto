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
    methods: {
        getData(data){
            this.result = data;
            console.log(this.result);
        },

        setPriceRating(data){
            this.placeRate.priceRating = data;
            console.log(this.placeRate);
        },

        setAmbianceRating(data){
            this.placeRate.ambianceRating = data;
            console.log(this.placeRate);
        },

        setHygieneRating(data){
            this.placeRate.hygieneRating = data;
            console.log(this.placeRate);
        },

        setComment(data){
            this.placeRate.comment = data;
            console.log(this.placeRate);
        }
    },
    components: { StarRating }
}


</script>

<template>
    <div class="place-container">
        Place name : {{ }}
    </div>    
    <div>
        <div class="star-container">
            <div class="rating-pair">
                <label id="price">Price Rating</label>
                <StarRating category="priceRating" @rate="setPriceRating" />
            </div>
            <div class="rating-pair">
                <label id="ambiance">Ambiance Rating</label>
                <StarRating category="ambianceRating" @rate="setAmbianceRating" />
            </div>
            <div class="rating-pair">
                <label id="hygiene">Hygiene Rating</label>
                <StarRating category="hygieneRating" @rate="setHygieneRating" />
            </div>            
        </div>
            
        <div class="comment-container">
            <label>Leave a Comment</label>
            <textarea placeholder="What do you think about that ?" v-model="comment"></textarea>
        </div>
        <div class="button-container">
            <button @click="setComment(comment)">Save Rating</button>
        </div>
    </div>
</template>

<style>


body{
    font-size: 1.5rem;
}

.place-container{
    padding: 5rem;
    font-size: 2rem;
    text-align: center;
}

.star-container{
    background-color: #A5BDD9;
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.rating-pair{
    
    display: flex;
    align-items: center;
    padding-left: 2rem;
    gap: 1rem;
}

.comment-container {
    background-color: #a2c4ec;
    display: flex;
    flex-direction: column;
    padding: 3rem;
}

textarea{
    width: 350px;
    height: 150px;
}

.button-container {
    background-color: #9EB3CB;
    padding: 3rem;
    display: flex;
  justify-content: center;
  align-items: center;
}

.button-container button{
   
}

</style>