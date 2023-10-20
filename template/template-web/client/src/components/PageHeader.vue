<script setup></script>

<template>
  <header>
    <div class="content">
      <div class="app-link">
        <RouterLink :to="{ name: 'home' }">
          <span class="app-name">TEMPLATE</span>
        </RouterLink>
      </div>
      <nav>
        <ul>
          <li>
            <div><RouterLink :to="{ name: 'home' }">Home</RouterLink></div>
          </li>
          <li>
            <div><RouterLink :to="{ name: 'home' }">Page 1</RouterLink></div>
          </li>
          <li>
            <div><RouterLink :to="{ name: 'home' }">Page 2</RouterLink></div>
          </li>
          <li>
            <div><RouterLink :to="{ name: 'home' }">Page 3</RouterLink></div>
          </li>
        </ul>
      </nav>
      <input type="search" class="search" placeholder="Search" />
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  background: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9em;
}

.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  column-gap: var(--gap-large);
  row-gap: var(--gap-medium);
}

.app-link {
  display: none;
}

.app-link a {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: var(--gap-small);
}

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

li {
  margin-bottom: 0;
}

li:not(:first-of-type) div {
  border-left: 1px solid var(--color-border);
  padding-left: var(--padding-medium);
  margin-left: var(--margin-medium);
}

a:visited {
  color: var(--color-link);
}

.search {
  flex-grow: 1;
  min-width: 0;
  width: 100%;
  border-radius: 2rem;
}

@media (min-width: 480px) {
  .app-link {
    display: block;
  }
}

@media (min-width: 768px) {
  .search {
    width: auto;
    order: 1;
  }

  nav {
    order: 2;
  }
}
</style>
