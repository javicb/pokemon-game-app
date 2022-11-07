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

  test('should display the PokemonPicture and PokemonOptions components', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: true,
          showAnswer: false,
          message: ''
        }
      }
    });

    const picture = wrapper.find('pokemon-picture-stub');
    const options = wrapper.find('pokemon-options-stub');

    // Assert
    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();
    expect(picture.attributes('pokemonid')).toBe('1');
    expect(options.attributes('pokemons')).toBeTruthy();
  });

  test('should return "Correcto" if the selection is correct', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: true,
          showAnswer: false,
          message: ''
        }
      }
    });
    const message = `Correcto... es ${pokemons[0].name}!!!`;

    // Act
    wrapper.vm.checkAnswer(1);

    // Assert
    expect(wrapper.vm.showAnswer).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.message).toBe(message);
  });

  test('should return "Incorrecto" if the selection is incorrect', () => {

    // Arrange
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: true,
          showAnswer: false,
          message: ''
        }
      }
    });
    const message = `Incorrecto... es ${pokemons[0].name}!!!`;

    // Act
    wrapper.vm.checkAnswer(2);

    // Assert
    expect(wrapper.vm.showAnswer).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.message).not.toBe(message);
  });

})