import styles from "../styles/Type.module.css";
import Link from "next/link";
import { backgrounds } from "../data/backgrounds";
import { Backgrounds } from "../types/Backgrounds";

type Props = {
  type: string;
};

const Type = ({ type }: Props) => {
  return (
    <Link href={`/type/${type}`}>
      <div
        style={{
          backgroundImage: `url(${backgrounds[type as keyof Backgrounds]})`,
        }}
        className={`flex ${styles.type}`}
      >
        {type}
      </div>
    </Link>
  );
};

export default Type;