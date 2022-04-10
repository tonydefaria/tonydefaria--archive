// Contact

// Layout
import Secondary from "../layouts/secondary"
// Built-in Components
import { motion } from "framer-motion"
// Components
import MetaComponent from "../components/meta_component"
import SocialNetworksSecondaryComponent from "../components/social_networks_secondary_component"

export default function Contact({meta, hankyoProject, hankyoSection}) {

  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "97jSqZqqUvzZmFeZH3rPXSa3")
  const email = hankyoProject.project.global_attributes.find(({uid}) => uid === "McLJmJJZLwuvUtkBttFLr3is")
  const social_networks = hankyoProject.project.social_networks

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 1}}}
      className="width-wide float-left"
    >
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <div className="hero">
        <div className="hero-box half">
          <div className="hero-row">
            <h1 className="font-size-xxl">{hero.title}</h1>
            <hr className="separator-s" />
            <p className="font-size-xl" dangerouslySetInnerHTML={{__html: hero.description}} />
            <hr className="separator-s" />
            <p className="font-size-s">Email:</p>
            <p className="font-size-xl font-weight-700">{email.value}</p>
            <hr className="separator-s" />
            <p className="font-size-s">Social Networks:</p>
            <SocialNetworksSecondaryComponent social_networks={social_networks} />
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

Contact.Layout = Secondary
