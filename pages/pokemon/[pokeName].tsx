import styles from '../../styles/PokemonInfo.module.css';
import Image from 'next/image';
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { backgrounds } from "../../data/backgrounds";
import { POKEAPI } from "../../services/pokeapi";
import { Backgrounds } from "../../types/Backgrounds";
import { Pokemon } from "../../types/Pokeapi";
import { InfoItem, TypeCard } from '../../components';

type Props = {
  pokemon: Pokemon
}

const pokeName = ({ pokemon }: Props) => {

  return (
    <div className={`flex-col items-center ${styles.pokemonInfo}`} style={{ backgroundImage: `url(${backgrounds[pokemon.types[0].type.name as keyof Backgrounds]})` }}>
       <Image src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} width={150} height={150} priority /> 
       <h1>{pokemon.name}</h1>
       <div className={`flex items-center ${styles.typesContainer}`}>
        {pokemon.types.map((type, index) => (
          <TypeCard type={type.type.name} key={index} />
        ))}
       </div>
       <div className={` ${styles.infoContainer}`}>
          <InfoItem info='Weight' value={`${pokemon.weight}KG`} />
          <InfoItem info='Height' value={`${pokemon.height}M`} />
       </div>
    </div>
  )
}

export default pokeName;

interface IParams extends ParsedUrlQuery {
  pokeName: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokeName } = context.params as IParams;
  
  const pokemon = await POKEAPI.GET_POKEMON_INFO(pokeName as string);

  return {
    props: {
      pokemon
    }
  }
}