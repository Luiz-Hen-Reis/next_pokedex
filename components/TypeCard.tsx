import styles from '../styles/Type.module.css';
import { backgrounds } from '../data/backgrounds';
import { Backgrounds } from '../types/Backgrounds';

type Props = {
    type: string
}

const TypeCard = ({ type }: Props) => {

  return (
    <div style={{ backgroundImage: `url(${backgrounds[type as keyof Backgrounds]})` }} className={`flex ${styles.typeCard}`} >
        {type}
    </div>
  )
}

export default TypeCard