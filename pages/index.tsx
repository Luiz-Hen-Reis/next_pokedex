import Head from "next/head";
import { FilterArea, Footer, Header, Pokedex } from "../components";
import { POKEAPI } from "../services/pokeapi";
import { Pokemon, RawData } from "../types/Pokeapi";

type Props = {
  pokemons: Pokemon[]
}

const App = ({ pokemons }: Props) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <Header />

      <main>
        <FilterArea />
        <Pokedex pokemons={pokemons} />
      </main>

      <Footer />
    </>
  );
};

export default App;

export const getServerSideProps = async () => {
  const resp: RawData = await POKEAPI.FETCH_POKEMONS();
  const promise = resp.results.map(async (pokemon) => POKEAPI.GET_POKEMONS(pokemon.url));

  const results = await Promise.all(promise);

  return {
    props: {
      pokemons: results
    }
  }
}


