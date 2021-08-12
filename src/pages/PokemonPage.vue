<template>

  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>¿Cuál es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :opciones="pokemonArr"/>
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
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const random = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[random]
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