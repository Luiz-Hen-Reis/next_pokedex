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

const pokeName = ({ pokemon }: Props) => {
  return (
    <>
      <Head>
        <title>{toCapitalize(pokemon.name)}</title>
      </Head>
      <div
        className={`flex-col items-center ${styles.pokemonInfo}`}
        style={{
          backgroundImage: `url(${
            backgrounds[pokemon.types[0].type.name as keyof Backgrounds]
          })`,
        }}
      >
        <Link href={"/"} className={`flex items-center ${styles.backButton}`}>
          <span>
            <BiArrowBack />
          </span>
          Back to Menu
        </Link>
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
          priority
        />
        <h1>
          {pokemon.name} - #{pokemon.id > 10 ? pokemon.id : `0${pokemon.id}`}
        </h1>
        <div className={`flex items-center ${styles.typesContainer}`}>
          {pokemon.types.map((type, index) => (
            <Type type={type.type.name} key={index} />
          ))}
        </div>
        <div className={`flex-col ${styles.infoContainer}`}>
          <InfoItem
            info="Ability"
            value={toCapitalize(pokemon.abilities[0].ability.name)}
          />
          <InfoItem info="Weight" value={`${pokemon.weight}KG`} />
          <InfoItem info="Height" value={`${pokemon.height}M`} />
        </div>
      </div>
    </>
  );
};

export default pokeName;

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
