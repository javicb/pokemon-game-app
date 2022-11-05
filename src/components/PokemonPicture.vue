<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" id="hidden-pokemon" class="hidden-pokemon" alt="img-pokemon" :src="imgSrc">
        <img v-else id="pokemon" class="fade-in" alt="img-pokemon" :src="imgSrc">
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
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`
        }
    },
}
</script>

<style scoped>
.pokemon-container {
    display: flex;
    height: 200px;
    justify-content: center;
}

img {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    display: block;
    height: 21%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}
</style>