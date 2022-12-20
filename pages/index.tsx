import { Layout, Pokedex } from "../components";
import useLoadMore from "../hooks/useLoadMore";
import { GET_POKEMONS_LIST } from "../services/pokeapi";
import { Pokemon } from "../types/Pokeapi";

type Props = {
  pokemons: Pokemon[];
};

const App = ({ pokemons }: Props) => {
  const { pokemonsOnScreen, loading, handleLoadMorePokemons } = useLoadMore(pokemons);

  return (
    <>
      <Pokedex pokemons={pokemonsOnScreen} loading={loading} handleLoadMorePokemons={handleLoadMorePokemons} />
    </>
  );
};

App.PageLayout = Layout;

export default App;

export const getStaticProps = async () => {
  const pokemons = await GET_POKEMONS_LIST();

  return {
    props: {
      pokemons,
    },
  };
};
