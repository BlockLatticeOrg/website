import styles from '../../styles/footer.module.css'

export default function Footer() {
    return(
      <>
        <footer className={styles.footer}>
          <ul className={styles.footerList}>
            <li>
              About blocklattice.org
            </li>
            <li>
              About Nano
            </li>
            <li>
              Network Status
            </li>
            <li>
              &copy; 2020 BlockLattice.org. All Rights Reserved
            </li>
          </ul>
        </footer>
      </>
  );
};
