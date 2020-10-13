import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blocklattice.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

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
