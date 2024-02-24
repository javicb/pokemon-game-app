import pokemonAPI from "@/api/pokemonAPI";

// Create array
export const getPokemons = () => {
  const pokemonArr = Array.from(Array(1025));
  return pokemonArr.map((_, index) => ({
    value: index + 1,
    label: `#${index + 1}`,
  }));
}

// Get pokemon name
export const getPokemonName = async ([a, b, c, d] = []) => {

  const promise = [
    pokemonAPI.get(`/${a.value}`),
    pokemonAPI.get(`/${b.value}`),
    pokemonAPI.get(`/${c.value}`),
    pokemonAPI.get(`/${d.value}`),
  ]

  const [poke1, poke2, poke3, poke4] = await Promise.all(promise)

  return [
    { name: poke1.data.name, id: poke1.data.id },
    { name: poke2.data.name, id: poke2.data.id },
    { name: poke3.data.name, id: poke3.data.id },
    { name: poke4.data.name, id: poke4.data.id }
  ]
}

// We mix the array of pokemon
const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => 0.5 - Math.random());
  const pokemons = await getPokemonName(mixedPokemons.splice(0, 4));
  return pokemons;
}


export default getPokemonOptions;