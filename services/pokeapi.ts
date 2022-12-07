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