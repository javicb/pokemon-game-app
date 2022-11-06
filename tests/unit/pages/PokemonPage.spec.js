import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage.vue';
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('should be match with snapshot', () => {
    // Asert
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call mixPokemonArray when mounting the component', () => {

    // Arrange
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');

    // Act
    mount(PokemonPage);

    // Assert
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test('It must match the snapshot when the pokemons load', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    });

    // Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

})