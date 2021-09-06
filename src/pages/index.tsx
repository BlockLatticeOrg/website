import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import axios from 'axios'

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
            <img src="/assets/arrow_right.svg" data-alt="Open Camera" />
          </div>
          <input className={styles.addressNano} type="text" id="addNanoAddress" />
        </div>
        <div className={styles.iconsMain}>
          <button className="btnMain btnCamera" data-alt="Open Camera" id="open_camera" />
          <button className="btnMain btnCopy" data-alt="Copy" id="copy" />
        </div>

      </main>

      <div className="qr-modal">
        <div className="qr-content">
          <div id="qr-reader" style={{ width: '500px' }}></div>
          <div className="close" id="close_camera">X</div>
        </div>
      </div>

      <script type="text/javascript" src="/js/html5-qrcode/dist/html5-qrcode.min.js"></script>
      <script type="text/javascript" src="/js/scanner.js"></script>
      <script type="text/javascript" src="/js/main.js"></script>

      <Footer />

    </div>

  )
}

const get = function (url) {
  const options = { timeout: 1000 * 30 }
  return new Promise(async function (resolve, reject) {
    axios.get(url, options)
      .then((res) => {
        if (typeof (res.data) === 'object') {
          if ("error" in res.data) {
            reject(res.data.error)
          } else {
            resolve(res.data)
          }
        } else {
          reject("invalid node response")
        }
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.statusText);
        } else if (err.request) {
          reject("no response from node");
        } else {
          reject(err.message);
        }

      })
  })
}

export function getServerSideProps() {

  return new Promise((resolve, reject) => {
    const server = 'https://explorer.api.blocklattice.org'
    const path = '/v1/accounts/nano_3tcmixp3f5d5qan58jdknnc55hy9m6jd7gkkmsjsd1fksd159giba6rs9sas/info?representative=true&weight=true&pending=true'
    get(server + path)
      .then((res) => {
        resolve({
          props: {
            accountsInfo: res,
          }
        })
      })
      .catch((err) => {
        reject({
          error: err
        })
      })
  })

}
