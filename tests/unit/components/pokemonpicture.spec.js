import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture.vue';

describe('PokemonPicture component', () => {

  test('should be match with snapshot', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    // Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('it should show the hidden image and the pokemonId 100', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    // Act
    const [img1, img2] = wrapper.findAll('img');

    // Assert
    expect(img1.exists()).toBe(true);
    expect(img2).toBe(undefined);
    expect(img1.classes('hidden-pokemon')).toBe(true);
    expect(img1.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png`);
  });

  test('should show the pokemon if showpokemon=true', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    // Act
    const img = wrapper.find('img');

    // Assert
    expect(img.exists()).toBe(true);
    expect(img.classes('hidden-pokemon')).toBe(false);
    expect(img.classes('fade-in')).toBe(true);
  });
})