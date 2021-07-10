import Image from 'next/image';
import styles from '../styles/Topbar.module.css';

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <Image
        src="/logo_horizontal.svg"
        alt="logotipo CW Convites"
        width={500}
        height={70}
      />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>CASAMENTO</a>
            <div className={styles.dropdownContent}>
              <a href="#">CONVITES</a>
              <a href="#">CAIXAS</a>
              <a href="#">PAPELARIA</a>
            </div>
          </li>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>DEBUTANTES</a>
            <div className={styles.dropdownContent}>
              <a href="#">CONVITES</a>
              <a href="#">CAIXAS</a>
              <a href="#">PAPELARIA</a>
            </div>
          </li>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>EMPRESARIAL</a>
            <div className={styles.dropdownContent}>
              <a href="#">CONVITES</a>
              <a href="#">CAIXAS</a>
              <a href="#">PAPELARIA</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}