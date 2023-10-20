<script setup>
import WelcomeMessage from '../components/WelcomeMessage.vue'
import ConnectionStatus from '../components/ConnectionStatus.vue'
</script>

<template>
  <main>
    <div class="content">
      <ConnectionStatus />
      <WelcomeMessage />
    </div>
  </main>
</template>

<style scoped></style>
