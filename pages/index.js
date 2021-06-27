import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tony de Faria</title>
        <meta name="description" content="I'm a self-taught creative thinker and, I like to use words, images and code to express my thoughts and ideas. I'm passionate about stories that have humanity, compassion and food." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex"></meta>
      </Head>
    </div>
  )
}
