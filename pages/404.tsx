import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/NotFound.module.css'

const custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
  
      <div className={`flex-col items-center ${styles.container}`}>
          <h1 className={styles.h1}>404</h1>
          <p className={styles.p}>The page you are looking for does not exist</p>
          <Link className={styles.link} href='/'>Back To The Home Page</Link>
      </div>
    </>
  )
}

export default custom404;