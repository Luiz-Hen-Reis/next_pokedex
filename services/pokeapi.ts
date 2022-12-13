import { Pokemon, PokemonType, RawData } from "../types/Pokeapi";

const BASE = "https://pokeapi.co/api/v2";

export const FETCH_POKEMONS = async (offset = 0, limit = 24) => {
  const resp = await fetch(`${BASE}/pokemon?offset=${offset}&limit=${limit}`);
  return await resp.json();
};

export const GET_POKEMONS = async (url: string) => {
  const resp = await fetch(url);
  return await resp.json();
};

export const GET_POKEMON_INFO = async (name: string) => {
  const resp = await fetch(`${BASE}/pokemon/${name}/`);
  return await resp.json();
};

export const GET_POKEMONS_TYPES = async () => {
  const resp = await fetch(`${BASE}/type`);
  const { results } = await resp.json();
  return results;
};

export const GET_POKEMON_TYPE = async (type: string) => {
  const resp = await fetch(`${BASE}/type/${type}`);
  const types: PokemonType = await resp.json();
  return types;
};


export const GET_POKEMONS_LIST = async (limit = 24) => {
  const resp: RawData = await FETCH_POKEMONS(0, limit);
  const promise = resp.results.map(async (pokemon) =>
    GET_POKEMONS(pokemon.url)
  );

  const results: Pokemon[] = await Promise.all(promise);

  return results;
};
