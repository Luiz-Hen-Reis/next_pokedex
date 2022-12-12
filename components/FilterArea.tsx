import styles from '../styles/Filter.module.css'
import Type from './Type'
import { pokemonTypes } from '../data/pokemonTypes'

const FilterArea = () => {
  return (
    <div className={`flex-col ${styles.filter}`}>
        <h1 className={styles.h1}>Filter by type:</h1>
        <div className={`flex items-center ${styles.typesContainer}`}>
            {pokemonTypes.map((type) => (
                <Type type={type} key={type} />
            ))}
        </div>
    </div>
  )
}

export default FilterArea