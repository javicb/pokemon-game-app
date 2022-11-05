import pokemonAPI from '@/api/pokemonAPI'

describe('PokemonAPI', () => {
  test('axios must be configured with the api url', () => {
    expect(pokemonAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
})