<template>
  <h1>¿Cuál es este pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="true"/>
  <PokemonOptions :opciones="pokemonArr"/>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  data() {
    return {
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
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