<script>
import { ref } from 'vue';
import StarRating from 'vue-star-rating'

export default {
    name: 'PlaceFormRating',
    data() {
        return {
            placeRating : {
                price : '',
                ambiance : '',
                hygiene : '',
                comment : ''
            }
        }
    },
    props : {
        place : Object,
        ratePlace : Function
    }
}


</script>

<template>
    <div>
        <h1>Je suis dans place Form Rating</h1>
    </div>
    <div>
        <label id="price">Price Rating</label>

        <label id="ambiance">Ambiance Rating</label>

        <label id="hygiene">Hygiene Rating</label>
    </div>
    <div>
        <label id="comment-section">Leave a Comment</label>
        <textarea placeholder="What do you think about that ?">

        </textarea>
    </div>
    
    
</template>

<style>
</style>