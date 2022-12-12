import Head from "next/head";
import { FilterArea, Footer, Header, Pokedex } from "../components";
import { GET_POKEMONS_LIST } from "../services/pokeapi";
import { Pokemon } from "../types/Pokeapi";

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
  
  const pokemons = await GET_POKEMONS_LIST();

  return {
    props: {
      pokemons
    }
  }
}


