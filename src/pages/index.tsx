import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blocklattice.org</title>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </Head>

      <Header />  

      <main className={styles.main}>
        <div className={styles.insert}>
          <div className={styles.title}>
            <h1>Insert NANO address or block hash</h1>
            <img src="/assets/arrow_right.svg" alt="Open Camera" />
          </div>
          <input className={styles.adressNano} type="text"/>
        </div>
        <div className={styles.iconsMain}>
          <img src="/assets/open_camera.svg" alt="Open Camera" />
          <img src="/assets/icon_copy.svg" alt="Open Camera" />
        </div>

      </main>

      <Footer />

    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://explorer.api.blocklattice.org/v1/accounts/nano_3tcmixp3f5d5qan58jdknnc55hy9m6jd7gkkmsjsd1fksd159giba6rs9sas/info?representative=true&weight=true&pending=true");
  const data = await response.json();
  return {
    props: {  
      accountsInfo: data,
    }
  }
}
