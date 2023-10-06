<script setup>

    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const placeList = ref([
        { Id: ++id.value, Type: "restaurant", Title: "Brutopia", Address: "888 rjij", Rating: 2, HygieneRating: 5, AmbianceRating: 3, PriceRating: 5, Picture: "https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" },
        { Id: ++id.value, Type: "restaurant", Title: "cheval blanc", Address: "56656 fd", Rating: 3, HygieneRating: 3, AmbianceRating: 4, PriceRating: 2 },
        { Id: ++id.value, Type: "activity", Title: "nyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2 },
        { Id: ++id.value, Type: "travel", Title: "bnyx", Address: "86 sfd", Rating: 1, HygieneRating: 4, AmbianceRating: 4, PriceRating: 2, Picture: "https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg" }
    ]);

    const route = useRoute()
    const id = Number(route.params.id)

    const place = computed(() => {
        return placeList.value.find((p) => p.Id === id);
    });

</script>

<template>
    


</template>