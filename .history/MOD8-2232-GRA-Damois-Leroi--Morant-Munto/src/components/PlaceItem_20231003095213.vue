<script>
export default {
  props: {
    rating: Number,
    id: Number,
    title: String,
    address: String
  },
  computed: {
    computedRating() {
      // Convert the rating prop to the appropriate representation (e.g., stars)
      switch (this.rating) {
        case 5:
          return '*****';
        case 4:
          return '****';
        case 3:
          return '***';
        case 2:
          return '**';
        case 1:
          return '*';
        default:
          return '0';
      }
    }
  }
};
</script>
/** this component is used for display any kind place */
<template>
    <div>
      <!-- Display the picture, title, and address using props -->
      <div class="picture">
        <img :src="pictureUrl" alt="Place Image" />
      </div>
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="address">
        <p>{{ address }}</p>
      </div>
      <!-- Display the place's rating using computed property -->
      <div>{{ computedRating }}</div>
      <!-- Link to the place using router-link -->
      <router-link :to="'/places/' + id">Link to Place</router-link>
    </div>
  </template>