import { useEffect, useState } from "react";

const pageLimit = 20;

export function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const rawPokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=${
          pageLimit * page
        }`
      );
      const pokemonsResponse = await rawPokemonsResponse.json();

      setPokemons(pokemonsResponse.results);
    };

    fetchPokemons();
  }, [page]);

  return (
    <div>
      <h1>Pokemons</h1>

      <div>
        {pokemons.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <div>
        <button onClick={() => setPage(page - 1)}>Previous</button>

        {page}

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

const PokemonListItem = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
};
