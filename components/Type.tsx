import styles from "../styles/Type.module.css";
import { backgrounds } from "../data/backgrounds";
import { Backgrounds } from "../types/Backgrounds";

type Props = {
  type: string;
};

const Type = ({ type }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[type as keyof Backgrounds]})`,
      }}
      className={`flex ${styles.type}`}
    >
      {type}
    </div>
  );
};

export default Type;
