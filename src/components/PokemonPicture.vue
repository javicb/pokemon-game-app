<template>
  <div class="pokemon-container">
    <img id="pokemon-oculto"
         class="hidden-pokemon"
         :src="imgSrc"
         alt="img-pokemon">
    <img id="pokemon"
         :src="imgSrc"
         class="fade-in"
         alt="img-pokemon"
         v-if="showPokemon">
  </div>
</template>

<script>
export default {
    name: 'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required: true,
            default: 0
        },
        showPokemon: {
            type: Boolean,
            requiered: true,
            default: false
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    },
}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
}

img {
    width: 50%;
    user-select: none;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    height: 21%;
    display: block;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -ms-user-select: none;
    -moz-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>