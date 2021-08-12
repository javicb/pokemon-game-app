<template>
  <div class="pokemon-container">
    <img id="pokemon"
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         class="fade-in"
         alt="img-pokemon">
    <img id="pokemon-oculto"
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         class="hidden-pokemon"
         alt="img-pokemon">
  </div>
</template>

<script>
export default {

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