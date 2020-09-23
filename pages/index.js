import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <img src="" alt="logo" />
        <div className="nano-quotation">
          <label>1N USD 0.94</label> <label> +1.51%^ </label>
        </div>
        <div className="select-language">
          icon Engish
        </div>
        <div className="search-header">Icon search</div>
      </header>

      <main className={styles.main}>
        <div className="title-main">
          <h1 className={styles.title}>
            Account name lorem ipsum dolor sit
          </h1>
        </div>
        <div className="my-nano-quantity">
          icon eye
          N 2,335.854896
          USD $2,183.93
          BTC 0.237816
          0.00 NANO pending
        </div>
        <div className="handle-page">
          icon copy
          <div className="qrcode">
            QRKode  
          </div>  
          icon share
        </div>
      </main>

      <footer className={styles.footer}>
        <ul>
          <li>
            Abount blocklattice.org
          </li>
          <li>
            About Nano
          </li>
          <li>
            Network Status
          </li>
          <li>
          &copy; 2020 BlockLattice.Org. All Right Reserved
          </li>
        </ul>
      </footer>
    </div>
  )
}
