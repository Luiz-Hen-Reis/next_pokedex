import Head from "next/head";
import styles from "../../styles/Pokedex.module.css";
import { useEffect } from 'react';
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FilterArea, Footer, Header, PokemonCard } from "../../components";
import { GET_POKEMONS_LIST } from "../../services/pokeapi";
import { Pokemon } from "../../types/Pokeapi";
import useLoadMore from "../../hooks/useLoadMore";

type Props = {
  pokemons: Pokemon[];
};

const pokeType = ({ pokemons }: Props) => {
 const { handleLoadMorePokemons, pokemonsOnScreen, loading } = useLoadMore(pokemons);

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <Header />
      <main>
        <FilterArea />
        <div className={styles.pokedex}>
          {pokemonsOnScreen.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
        <div onClick={handleLoadMorePokemons} className={`flex items-center ${styles.loadMore}`}>
        <h3>Load More</h3>
      </div>
      </main>

      <Footer />
    </>
  );
};

export default pokeType;

interface IParams extends ParsedUrlQuery {
  pokeType: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokeType } = context.params as IParams;


  
  return {
    props: {

    }
  }
};
