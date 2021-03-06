// Index

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Link from "next/link"
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
      transition={{opacity: {duration: .5}}}
      className="width-wide float-left"
    >
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <Head>
        <link rel="preload" as="image" href={hero.image} />
      </Head>
      {/*
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <figure className="loading">
                <Image src={hero.image} width={hero.width} height={hero.height} quality={100} alt="Hero Image" title="Tony de Faria" />
              </figure>
            </div>
          </div>
        </div>
      */}
      <div className="hero">
        <div className="hero-box half">
          <div className="hero-row">
            <h1 className="font-size-xxl white-cl">{hero.title}</h1>
            <hr className="separator-s" />
            <p className="font-size-xl white-cl" dangerouslySetInnerHTML={{__html: hero.description}} />
            <hr className="separator-s" />
            <Link href="/portraits"><a aria-label="Portraits" id="portraits" className="button-l button-white text-transform-uppercase font-weight-900">Portraits</a></Link>
          </div>
        </div>
      </div>
      <style>{`
        .primaryy {
          background-image: url(${hero.image});
          background-position: bottom right;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
      </style>
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
