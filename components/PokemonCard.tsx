import { Pokemon } from "../types/Pokeapi";
import styles from "../styles/Card.module.css";
import { backgrounds } from "../data/backgrounds";
import { Backgrounds } from "../types/Backgrounds";
import Type from "./Type";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div
      className={`flex-col items-center ${styles.card}`}
      style={{
        backgroundImage: `url(${
          backgrounds[pokemon.types[0].type.name as keyof Backgrounds]
        })`,
      }}
    >
      <div className={`flex-col items-center ${styles.pokemonInfo}`}>
        <img
          src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
          alt={pokemon.name}
          width={100}
          height={100}
        />
        <h2>{pokemon.name}</h2>
        <div className={`flex ${styles.types}`}>{pokemon.types.map((poke) => (
          <Type type={poke.type.name} />
        ))}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
