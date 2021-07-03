import { CgGlobeAlt, CgSearch } from 'react-icons/cg'
import styles from './header.module.css'

import { useState } from 'react'

export default function Header() {
  const [title, setTitle] = useState("BlockLattice.org") 
  return (
    <>
      <header className={styles.header}>
        <div className={styles.labellabelLogo}>
          <img src="/assets/logo.svg" alt="Logo Nano" />
          <label>{title}</label>
        </div>

        <div className="nano-quotation">
          <label>Price: <span id="amount">8</span> <span id="currency">USD</span></label>
          <label>+1.51%</label>
        </div>
        <div className={styles.selectLanguage}><CgGlobeAlt /> <label>Engish</label> </div>
        <div className={styles.searchHeader}><CgSearch /></div>
      </header>
    </>
  );
}
