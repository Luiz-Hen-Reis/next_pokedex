import { Pokemon } from "../types/Pokeapi";
import styles from '../styles/Pokedex.module.css'
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: Pokemon[];
};

const Pokedex = ({ pokemons }: Props) => {
  return (
    <div className={styles.pokedex}>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default Pokedex;
