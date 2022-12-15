import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import SearchBar from "./SearchBar";
 
const Header = () => {
  return (
    <header className={`flex ${styles.header}`}>
      <Link href={'/'}><Image
        src="/pokeapi-logo.png"
        alt="pokeapi logo"
        width={100}
        height={40}
      /></Link>
      <SearchBar />
    </header>
  );
};

export default Header;
