/* No recomendable pero util por conocer */
const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/1';
const div1 = document.querySelector('.pokemon1');
const div2 = document.querySelector('.pokemon2');
/* 
fetch(pokeAPI)
  .then(res => res.json())
  .then(data => {
    let element = document.querySelector('.pokemon');
    element.innerHTML = `
      <p>${data.name}</p>
      <img src="${data.sprites.front_default}">
    `;

    console.log(data.sprites.front_default);
  })
  .catch(err => console.log(err)); */

/* console.log(pokeAPI); */

/* ASYNC & AWAIT */
const obtenerPokemons = async (pokemon1, pokemon2) => {
  try {
    const user1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`);
    const dataUser1 = await user1.json();

    const user2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`);
    const dataUser2 = await user2.json();

    console.log(dataUser1.name, dataUser2.name);
    console.log(dataUser1.sprites.front_default);
    console.log(dataUser2.sprites.front_default);
    htmlPokemon1(dataUser1.name, dataUser1.sprites.front_default);
    htmlPokemon2(dataUser2.name, dataUser2.sprites.front_default);
  } catch (error) {
    console.log(error);
  }
};

const htmlPokemon1 = (pokemonID, fotoPokemon) => {
  div1.innerHTML = `
    <p>${pokemonID}</p>
    <img src="${fotoPokemon}">
  `;
};

const htmlPokemon2 = (pokemonID, fotoPokemon) => {
  div2.innerHTML = `
  <p>${pokemonID}</p>
  <img src="${fotoPokemon}">
`;
};

obtenerPokemons(2, 5);
