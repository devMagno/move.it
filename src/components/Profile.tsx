import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/devmagno.png" alt="Guilherme Magno"/>
      <div>
        <strong>Guilherme Magno</strong>
        <p><img src="icons/level.svg" alt="Level"/>Level 1</p>
      </div>
    </div>
  );
}