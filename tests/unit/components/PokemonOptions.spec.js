import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    });
  });

  test('should be match with snapshot', () => {

    // Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should display all four options correctly', () => {

    // Act
    const liTags = wrapper.findAll('li');

    // Assert
    expect(liTags.length).toBe(4);
    expect(liTags[0].text()).toBe('Bulbasaur');
    expect(liTags[1].text()).toBe('Ivysaur');
    expect(liTags[2].text()).toBe('Venusaur');
    expect(liTags[3].text()).toBe('Charmander');
  });


  test('should emit "selection" with its payload', () => {

    // Arrange
    const [li1, li2, li3, li4] = wrapper.findAll('li');

    // Act
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');
    const emitted = wrapper.emitted('selection');

    // Assert
    expect(emitted).toHaveLength(4);
    expect(emitted[0]).toEqual([1]);
    expect(emitted[1]).toEqual([2]);
    expect(emitted[2]).toEqual([3]);
    expect(emitted[3]).toEqual([4]);
  });
})
