// Index

// Layout
import Primary from "../layouts/primary"

// Built-in Components
// import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"

export default function Index({meta, hankyoProject, hankyoSection}) {

  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="width-wide float-left"
    >
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <Head>
        <link rel="preload" as="image" href={hero.image} />
      </Head>
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <figure className="loading">
              <Image src={hero.image} width={hero.width} height={hero.height} quality={100} alt="Hero Image" title="Tony de Faria" />
            </figure>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <hr className="separator-m" />
            <h1 className="font-size-display">{hero.title}</h1>
            <hr className="separator-m" />
            <p className="font-size-xxxl" dangerouslySetInnerHTML={{__html: hero.description}} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export async function getStaticProps() {
  // Hankyo
  const url = "https://hankyo-api-pro.herokuapp.com"
  const token = "?hankyo_token=ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"
  // Project
  const resProject = await fetch(`${url}/mies/project${token}`)
  const hankyoProject = await resProject.json()
  // Section
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz"
  const resSection = await fetch(`${url}/mies/project/sections/${sectionUID}${token}`)
  const hankyoSection = await resSection.json()
  // Meta
  const meta = hankyoSection.section.meta_tag

  if (!hankyoProject) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      meta,
      hankyoProject,
      hankyoSection
    }
  }
}

Index.Layout = Primary
