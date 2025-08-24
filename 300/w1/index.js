let min = 1;
let max = 151;
let randomNum = ;

const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
const root = document.getElementById('root');
const form = document.getElementById('addPokemonForm');
form.addEventListener('submit', (event) => {
  // Prevents the form from submitting and refreshing the page
  event.preventDefault();

  let existingDiv = document.querySelector('.card');
  let btn = document.querySelector('button');

  if (existingDiv === null) {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((newPokemon) => {
        // create elements for the Pokemon Card
        let div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h1');
        div.className = 'card';
        //   image.src = newPokemon.sprites.other.dream_world.front_default;
        image.src = newPokemon.sprites.front_default;
        name.textContent = newPokemon.name;
        div.appendChild(name);
        div.appendChild(image);
        root.appendChild(div);

        btn.textContent = 'reset!';
      });
  } else {
    btn.textContent = 'randomise!';
    location.reload();
  }
});
