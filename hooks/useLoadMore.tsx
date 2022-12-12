import { useState } from "react";
import { GET_POKEMONS_LIST } from "../services/pokeapi";
import { Pokemon } from "../types/Pokeapi";

const useLoadMore = (pokemons: Pokemon[]) => {
  const [pokemonsOnScreen, setPokemonsOnScreen] = useState<Pokemon[]>(pokemons);
  const [pokemonsOnScreenLimit, setPokemonsOnScreenLimit] = useState(48);
  const [loading, setLoading] = useState(false);

  const handleLoadMorePokemons = async () => {
    setPokemonsOnScreenLimit(pokemonsOnScreenLimit + 24);

    setLoading(true);
    const results = await GET_POKEMONS_LIST(pokemonsOnScreenLimit);
    setPokemonsOnScreen(results);
    setLoading(false);
  };

  return { pokemonsOnScreen, loading, handleLoadMorePokemons };
};

export default useLoadMore;
