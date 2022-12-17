import Link from 'next/link';
import styles from '../styles/NotFound.module.css'

const custom404 = () => {
  return (
    <div className={`flex-col items-center ${styles.container}`}>
        <h1 className={styles.h1}>404</h1>
        <p className={styles.p}>The page you're looking for doesn't exist</p>
        <Link className={styles.link} href='/'>Back To The Home Page</Link>
    </div>
  )
}

export default custom404;