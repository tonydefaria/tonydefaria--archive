// Index

// Data
import Hankyo from "../lib/hankyo"

// Layout
import Primary from "../layouts/primary"

// Built-in Components
import { motion } from "framer-motion"

// Components
import MetaComponent from "../components/meta_component"
import HeroComponent from "../components/hero_component"

export default function Index({project, page, meta}) {

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="width-wide float-left"
    >
      <MetaComponent resource={project} meta={meta} />
      <HeroComponent page={page} />
    </motion.div>
  )
}

export async function getStaticProps({locale}) {
  // Hankyo
  const project = Hankyo.data(locale).project
  const page = project.pages.find(({uid}) => uid === 1)
  const meta = page.meta_component

  return {
    props: {
      project,
      page,
      meta
    }
  }
}

Index.Layout = Primary
