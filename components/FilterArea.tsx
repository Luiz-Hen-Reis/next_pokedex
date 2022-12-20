import styles from "../styles/Filter.module.css";
import Type from "./Type";
import { pokemonTypes } from "../data/pokemonTypes";
import Link from "next/link";

const FilterArea = () => {
  return (
    <div className={`flex-col ${styles.filter}`}>
      <h1 className={styles.h1}>Filter by type:</h1>
      <div className={`flex items-center ${styles.typesContainer}`}>
        {pokemonTypes.map((type, index) => (
          <Link key={index} href={`${type === "show all" ? "/" : `/type/${type}`}`}>
            <Type type={type} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterArea;
