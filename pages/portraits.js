// Portraits

// Layout
import Secondary from "../layouts/secondary"
// Built-in Components
import { motion } from "framer-motion"
// Components
import MetaComponent from "../components/meta_component"

export default function Portraits({meta, hankyoProject, hankyoSection}) {

  const email = hankyoProject.project.global_attributes.find(({uid}) => uid === "McLJmJJZLwuvUtkBttFLr3is")
  const title = hankyoSection.section.blocks.find(({uid}) => uid === "W6AxmbQmmJQmW2iJKVPH2Zbq").title
  const description = hankyoSection.section.blocks.find(({uid}) => uid === "QQTeAbZE4jgJGgqo7ofPW4v8").description

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="width-wide float-left"
    >
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{delay: .250, opacity: {duration: .250}}}
        className="width-wide float-left"
      >
        <div className="content top">
          <div className="content-box">
            <div className="content-row">
              <h1 className="font-size-xxl">{title}</h1>
              <hr className="separator-xxs" />
              <p className="font-size-l">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
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
  const sectionUID = "9tbaxmgFMVHCNBQv1FNyxbph"
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

Portraits.Layout = Secondary
