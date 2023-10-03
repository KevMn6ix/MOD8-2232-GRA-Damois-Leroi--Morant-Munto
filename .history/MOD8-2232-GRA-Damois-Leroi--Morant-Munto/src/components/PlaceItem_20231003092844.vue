<script>
export default {
  props: {
    rating: Number,
    id: Number
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
      <!-- Slot for the picture -->
      <slot name="picture"></slot>
      
      <!-- Slot for the place's name -->
      <slot name="title"></slot>
      
      <!-- Slot for the place's address -->
      <slot name="address"></slot>
      
      <!-- Display the place's rating using computed property -->
      <div>{{ computedRating }}</div>
      
      <!-- Link to the place using router-link -->
      <router-link :to="'/places/' + id">Link to Place</router-link>
    </div>
  </template>