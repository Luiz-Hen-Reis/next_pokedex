import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FcSearch } from 'react-icons/fc';
 
const Header = () => {
  return (
    <header className={`flex ${styles.header}`}>
      <Image
        src="/pokeapi-logo.png"
        alt="pokeapi logo"
        width={100}
        height={40}
      />
      <div className={`hidden ${styles.searchBar}`}>
        <input type="text" placeholder="Search Pokemon" className={styles.input} />
        <button className={styles.button}>
            <FcSearch size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
