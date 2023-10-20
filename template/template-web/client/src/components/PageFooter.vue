<script setup></script>

<template>
  <footer>
    <div class="content">
      <span>© 2023 Template.</span>
      <span>All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: var(--color-text-soft);
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  font-size: 0.9em;
}

.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: var(--gap-medium);
}

@media (min-width: 768px) {
  .content {
    justify-content: flex-end;
    text-align: right;
  }
}
</style>
