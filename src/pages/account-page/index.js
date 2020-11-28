import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AccontPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blocklattice.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.titleMain}>
          <h1 className={styles.title}>
            Account name lorem ipsum dolor sit
          </h1>
          <div className={styles.myNanoQty}>
            icon eye
            N 2,335.854896
            USD $2,183.93
            BTC 0.237816
            0.00 NANO pending
          </div>
        </div>
        
        <div className="handle-page">
          icon copy
          <div className="qrcode">
            QRKode
          </div>
          icon share
        </div>
      </main>

      <Footer />

    </div>
  )
}
