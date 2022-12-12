import { Pokemon, RawData } from "../types/Pokeapi";

const BASE = 'https://pokeapi.co/api/v2';

export const POKEAPI = {
  FETCH_POKEMONS: async (offset = 0, limit = 24) => {
    const resp = await fetch(`${BASE}/pokemon?offset=${offset}&limit=${limit}`);
    return await resp.json();
  },
  GET_POKEMONS: async (url: string) => {
    const resp = await fetch(url);
    return await resp.json();
  },
  GET_POKEMON_INFO: async (name: string) => {
    const resp = await fetch(`${BASE}/pokemon/${name}/`);
    return await resp.json();
  },
}

export const GET_POKEMONS_LIST = async (limit = 24) => {
  const resp: RawData = await POKEAPI.FETCH_POKEMONS(0, limit);
  const promise = resp.results.map(async (pokemon) =>
    POKEAPI.GET_POKEMONS(pokemon.url)
  );

  const results: Pokemon[] = await Promise.all(promise);

  return results;
}