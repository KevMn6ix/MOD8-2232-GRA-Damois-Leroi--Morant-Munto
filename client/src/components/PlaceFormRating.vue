<script>
import StarRating from './StarRating.vue';
import UsePlaceService from '../../server/services/places-service';
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
        },
        enterRating() {
            UsePlaceService().addRating(this.$route.params.id, Object.is(NaN, parseInt(this.placeRate.hygieneRating)) ? 1 : parseInt(this.placeRate.hygieneRating), Object.is(NaN, parseInt(this.placeRate.ambianceRating)) ? 1 : parseInt(this.placeRate.ambianceRating), Object.is(NaN, parseInt(this.placeRate.priceRating)) ? 1 : parseInt(this.placeRate.priceRating), Object.is(undefined, this.placeRate.comment) ? "" : this.placeRate.comment);
            console.log(UsePlaceService().findRatings())
        },

    },
    components: { StarRating }
}
</script>

<template>
    <div class="place-container">
        Please enter a comment
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
            <button @click="() => {setComment(comment); enterRating()}">Save Rating</button>
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

@media (prefers-color-scheme: dark) {
    .star-container {
        background-color: #a5bdd971;
    }
    .comment-container {
        background-color: #a2c4ec9d;
    }
    .button-container {
        background-color: #a5bdd971;
    }
    textarea {
        background-color: black;
        color: white;
    }
}

</style>