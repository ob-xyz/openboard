import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenBoard</title>
        <meta name="description" content="openboard.xyz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <h1>OpenBoard</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
