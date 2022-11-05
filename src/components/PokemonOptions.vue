<template>
  <div class="options-container">
    <ul>
      <li class="toCapitalFirst" v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .2);
  cursor: pointer;
  margin-bottom: 10px;
  padding: 1%;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, .05);
}

.options-container {
  display: flex;
  justify-content: center;
}

.toCapitalFirst {
  text-transform: capitalize;
}
</style>