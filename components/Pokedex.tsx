import styles from "../styles/Pokedex.module.css";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";
import { Pokemon } from "../types/Pokeapi";

type Props = {
  pokemons: Pokemon[];
  loading?: boolean;
  handleLoadMorePokemons?: () => void;
};

const Pokedex = ({ pokemons, loading, handleLoadMorePokemons }: Props) => {
  return (
    <>
      <div className={styles.pokedex}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
      {loading && <Loading />}
      {handleLoadMorePokemons && (
        <div
          onClick={handleLoadMorePokemons}
          className={`flex items-center ${styles.loadMore}`}
        >
          <h3>Load More</h3>
        </div>
      )}
    </>
  );
};

export default Pokedex;
