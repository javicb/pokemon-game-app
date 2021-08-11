<template>
  <h1>¿Cuál es este pokémon?</h1>
  <PokemonPicture/>
  <PokemonOptions/>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions'
import PokemonPicture from '../components/PokemonPicture'


export default {
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>

<style>

</style>