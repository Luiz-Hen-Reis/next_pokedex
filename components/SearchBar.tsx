import { FcSearch } from "react-icons/fc";
import styles from "../styles/Header.module.css";

const SearchBar = () => {
  return (
    <form method="GET" action="/search" className={`hidden ${styles.searchBar}`}>
      <input
        type="search"
        placeholder="Search Pokemon"
        name="p"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <FcSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
