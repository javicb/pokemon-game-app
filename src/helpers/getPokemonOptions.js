import pokemonAPI from "../api/pokemonAPI"

// Creamos el array
const getPokemons = () => {
  const pokemons = Array.from(Array(650))
  return pokemons.map((_, index) => index + 1)

}

// Mezclamos el array de pokemon
const getPokemonOptions = async () => {
  const mixedPokemon = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonName(mixedPokemon.splice(0, 4))
  return pokemons
}

// Obtenemos el nombre del pokemon
const getPokemonName = async ([a, b, c, d] = []) => {

  const promise = [
    pokemonAPI.get(`/${a}`),
    pokemonAPI.get(`/${b}`),
    pokemonAPI.get(`/${c}`),
    pokemonAPI.get(`/${d}`),
  ]

  const [poke1, poke2, poke3, poke4] = await Promise.all(promise)

  return [
    { name: poke1.data.name, id: poke1.data.id },
    { name: poke2.data.name, id: poke2.data.id },
    { name: poke3.data.name, id: poke3.data.id },
    { name: poke4.data.name, id: poke4.data.id }
  ]


}


export default getPokemonOptions