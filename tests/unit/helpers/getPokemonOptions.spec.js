import getPokemonOptions, { getPokemons, getPokemonName } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helper', () => {

  test('should return an array of number', async () => {

    // Act
    const pokemons = await getPokemons();

    // Assert
    expect(pokemons.length).toBe(650);
  });

  test('should return an array of four numbers whit pokemon names', async () => {

    // Arrange
    const pokemons = [
      { value: 1, label: '#1' },
      { value: 2, label: '#2' },
      { value: 3, label: '#3' },
      { value: 4, label: '#4' },
    ];

    // Act
    const getPokemons = await getPokemonName([pokemons[0], pokemons[1], pokemons[2], pokemons[3]])

    // Assert
    expect(getPokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ])
  })

  test('should return a mixed array', async () => {

    // Act
    const pokemons = await getPokemonOptions();

    // Assert
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      }
    ])
  });

})