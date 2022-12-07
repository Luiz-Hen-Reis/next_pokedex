import { typeColors } from '../data/typeColors';
import styles from '../styles/Type.module.css';
import { Colors } from '../types/Colors';

type Props = {
    type: string
}

const Type = ({ type }: Props) => {
  return (
    <div style={{ backgroundColor: `${typeColors[type as keyof Colors]}` }} className={`flex ${styles.type}`} >
        {type}
    </div>
  )
}

export default Type