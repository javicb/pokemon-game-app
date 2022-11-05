<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else class="fade-in">
    <h1>¿Cuál es este Pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button id="new-game" @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';


export default {
  name: 'PokemonOage',
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const random = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[random]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      const name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto... es ${name}!!!`
      } else {
        this.message = `Nooo... es ${name}!!!`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}

</script>

<style scoped>

</style>
