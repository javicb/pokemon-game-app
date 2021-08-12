<template>

  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else class="fade-in">
    <h1>¿Cuál es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :opciones="pokemonArr" @selection="checkAnswer"/>

    <template v-if="showAnswer" class="fade-in">
      <h2>{{message}}</h2>
      <button id="new-game" @click="newGame">Nuevo Juego</button>
    </template>
  </div>

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
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
      if(pokemonId === this.pokemon.id) {
        this.message = `Correcto... es ${this.pokemon.name}!!!`
      } else {
        this.message = `Nooo... es ${this.pokemon.name}!!!`
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
  components: {
    PokemonOptions,
    PokemonPicture
  },
  mounted () {
    this.mixPokemonArray();
  },
}
</script>

<style>

</style>