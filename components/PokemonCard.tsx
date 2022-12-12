import styles from "../styles/Card.module.css";
import Type from "./Type";
import { Pokemon } from "../types/Pokeapi";
import { backgrounds } from "../data/backgrounds";
import { Backgrounds } from "../types/Backgrounds";
import TypeCard from "./TypeCard";
import Link from "next/link";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
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
        <h2>{pokemon.name} #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</h2>
        <div className={`flex ${styles.types}`}>{pokemon.types.map((poke, index) => (
          <TypeCard type={poke.type.name} key={index} />
        ))}</div>
      </div>
    </div>
    </Link>
  );
};

export default PokemonCard;
