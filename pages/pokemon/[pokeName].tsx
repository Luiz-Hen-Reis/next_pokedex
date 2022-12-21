import styles from "../../styles/PokemonInfo.module.css";
import Image from "next/image";
import Head from "next/head";
import Type from "../../components/Type";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { backgrounds } from "../../data/backgrounds";
import { GET_POKEMON_INFO } from "../../services/pokeapi";
import { Backgrounds } from "../../types/Backgrounds";
import { Pokemon } from "../../types/Pokeapi";
import { InfoItem } from "../../components";
import { BiArrowBack } from "react-icons/bi";
import { toCapitalize } from "../../helpers/formatText";

type Props = {
  pokemon: Pokemon;
};

const pokemonInfoScreen = ({ pokemon }: Props) => {
  return (
    <>
      <Head>
        <title>{toCapitalize(pokemon.name)}</title>
      </Head>
      <div
        className={`flex items-center ${styles.pageContainer}`}
        style={{
          backgroundImage: `url(${
            backgrounds[pokemon.types[0].type.name as keyof Backgrounds]
          })`,
        }}
      >
        <Link className={styles.backButton} href={'/'}><span><BiArrowBack /></span>Back to Pokedex</Link>
        <div className={`flex-col items-center ${styles.infoContainer}`}>
          <Image
            className={styles.image}
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            width={150}
            height={150}
          />
          <div className={styles.pokemonInfo}>
            <h1>{toCapitalize(pokemon.name)}</h1>
            <div className={`flex items-center`}>
              {pokemon.types.map((type, index) => (
                <Type type={type.type.name} key={index} />
              ))}
            </div>
            <InfoItem
              info="Ability"
              value={toCapitalize(pokemon.abilities[0].ability.name)}
            />
            <InfoItem info="Weight" value={`${pokemon.weight}KG`} />
            <InfoItem info="Height" value={`${pokemon.height}M`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default pokemonInfoScreen;

interface IParams extends ParsedUrlQuery {
  pokeName: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokeName } = context.params as IParams;

  const pokemon = await GET_POKEMON_INFO(pokeName as string);

  return {
    props: {
      pokemon,
    },
  };
};
