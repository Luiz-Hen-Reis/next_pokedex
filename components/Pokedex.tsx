import styles from "../styles/Pokedex.module.css";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";
import useLoadMore from "../hooks/useLoadMore";
import { Pokemon } from "../types/Pokeapi";

type Props = {
  pokemons: Pokemon[];
};

const Pokedex = ({ pokemons }: Props) => {
  const { pokemonsOnScreen, loading, handleLoadMorePokemons } = useLoadMore(pokemons);

  return (
    <>
      <div className={styles.pokedex}>
        {pokemonsOnScreen.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
      {loading && <Loading />}
      <div
        onClick={handleLoadMorePokemons}
        className={`flex items-center ${styles.loadMore}`}
      >
        <h3>Load More</h3>
      </div>
    </>
  );
};

export default Pokedex;
