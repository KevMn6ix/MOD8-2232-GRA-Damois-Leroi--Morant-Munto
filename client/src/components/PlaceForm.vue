<script setup>
import { ref } from 'vue'
const emit = defineEmits(['response'])
const placeInput = ref ({
    Title: '',
    Address: '',
    PriceRating:0,
    AmbianceRating:0,
    HygieneRating:0
})
</script>
/** this is the form for to rate place */
<template>
    <form method="post" onsubmit="return false">
        <label>
            Place's name
        </label>
        <input type="text" v-model="placeInput.Title">
        <label>
            Place's address
        </label>
        <input type="text" v-model="placeInput.Address">
        <label>
            Price Rating
        </label>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <label>
            Ambiance Rating
        </label>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <label>
            Hygiene Rating
        </label>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            *
        </button>
        <button>
            Post Rating
        </button>
    </form>
</template>