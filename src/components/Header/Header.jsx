import styles from './Header.module.css';
import header from '../../assets/svg/header.svg';

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles['header-title']}>
          <img src={header}></img> TODO
        </h1>
      </div>
    </>
  );
}
