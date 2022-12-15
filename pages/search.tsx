import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout, Pokedex } from "../components";
import { GET_POKEMON_INFO } from "../services/pokeapi";
import { Pokemon } from "../types/Pokeapi";

const search = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const router = useRouter();
  const { p } = router.query;
const pokemonArray: Pokemon[] = [];

  useEffect(() => {
    const searchPokemonInfo = async () => {
      setLoading(true);
      if (p) {
        const data = await GET_POKEMON_INFO(p as string);
        pokemonArray.push(data)
        setPokemons(pokemonArray);
      }
      setLoading(false);
    };

    searchPokemonInfo();
  }, [p]);

  return <>
    <Pokedex pokemons={pokemons} loading={loading} />
  </>;
};

search.PageLayout = Layout;

export default search;
