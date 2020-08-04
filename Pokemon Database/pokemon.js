const pokemonBox = document.querySelector(".pokemonwrapper");
const formListener = document.querySelector("form");
const getInput = document.querySelector("input[type=text]");

formListener.addEventListener("submit", (e) => {
  e.preventDefault();
  pokemonBox.innerHTML = "";
  getPokemon(getInput.value.toLowerCase());
});

// create async function, allows us to use await keyword. Default pokemon = pikachu. 
async function getPokemon(name = "pikachu") {
  // fetch json data from pokeapi 
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await pokemonData.json();

  const pokemonSpecifics = document.createElement("div");
  pokemonSpecifics.classList.add("pokemon");

  pokemonSpecifics.innerHTML = `
    <div class="info">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" id = "pokemonimage">
	  <h2>${pokemon.name}</h2>
	  <h4>ID: #${pokemon.id}</h4>
    </div>

    <div class="stats">
      ${pokemon.stats.map((stat) => {return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;}).join("")}
    </div>
  `;

  pokemonBox.appendChild(pokemonSpecifics);
}

getPokemon();
