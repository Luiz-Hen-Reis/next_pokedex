import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout, Loading, Pokedex } from "../components";
import { formatSearchBarValue } from "../helpers/formatSearchBarValues";
import { GET_POKEMON_INFO } from "../services/pokeapi";
import { Pokemon } from "../types/Pokeapi";

const search = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const router = useRouter();
  const { p } = router.query;
  const pokemonArray: Pokemon[] = [];

  useEffect(() => {
    const searchPokemonInfo = async () => {
      try {
        setLoading(true);
        if (p) {
          const data = await GET_POKEMON_INFO(
            formatSearchBarValue(p as string)
          );
          pokemonArray.push(data);
          setPokemons(pokemonArray);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setPokemonNotFound(true);
      }
    };

    searchPokemonInfo();
  }, [p]);

  return (
    <>
      {pokemons.length > 0 && <Pokedex pokemons={pokemons} loading={loading} />}
      {pokemonNotFound && loading && <Loading />}
      {pokemonNotFound && !loading && <h1 className="flex items-center">Pokemon Not Found</h1>}
    </>
  );
};

search.PageLayout = Layout;

export default search;
