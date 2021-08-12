// Creamos el array
const getPokemons = () => {
  const pokemons = Array.from(Array(650))
  return pokemons.map((_, index) => index + 1)

}

// Mezclamos el array de pokemon
const getPokemonOptions = () => {
  const mixedPokemon = getPokemons().sort(() => Math.random() - 0.5)
  getPokemonName(mixedPokemon.splice(0, 4))
}

// Obtenemos el nombre del pokemon
const getPokemonName = ([a, b, c, d] = []) => {
  console.log(a, b, c, d)
}


export default getPokemonOptions