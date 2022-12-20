import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { Layout, Loading, Pokedex } from "../../components";
import {
  GET_POKEMONS_TYPES,
  GET_POKEMON_INFO,
  GET_POKEMON_TYPE,
} from "../../services/pokeapi";
import { Pokemon, PokemonType } from "../../types/Pokeapi";

type Props = {
  pokemons: Pokemon[];
  type: PokemonType;
};

const pokeTypePage = ({ type }: Props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const { pokeType } = useRouter().query;

  const arrayLimit = 24;
  useEffect(() => {
    const getPokemonsFiltered = async () => {
      setLoading(true);
      const pokemonsFilteredArray = type.pokemon.slice(0, arrayLimit);

      const promise = pokemonsFilteredArray.map(async (pokemon) =>
        GET_POKEMON_INFO(pokemon.pokemon.name)
      );

      setPokemons(await Promise.all(promise));
      setLoading(false);
    };

    getPokemonsFiltered();
  }, [pokeType]);

  return (
    <div>
      {loading && <Loading />}
      {!loading && <Pokedex pokemons={pokemons} />}
    </div>
  );
};

pokeTypePage.PageLayout = Layout;

export default pokeTypePage;

export const getStaticPaths = async () => {
  const types = await GET_POKEMONS_TYPES();

  const paths = types.map((pokemon: { name: string }) => ({
    params: {
      pokeType: pokemon.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  pokeType: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokeType } = context.params as IParams;
  const type: PokemonType = await GET_POKEMON_TYPE(pokeType);

  return {
    props: {
      type,
    },
  };
};