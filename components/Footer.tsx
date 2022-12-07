import styles from '../styles/Footer.module.css'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className={`flex-col items-center ${styles.footer}`}>
        <p>&copy; All Rights Reserved</p>
        <p><a href="https://github.com/Luiz-Hen-Reis" target="_blank"><span><FiGithub /></span> Luiz-Hen-Reis</a></p>
    </footer>
  )
}

export default Footer