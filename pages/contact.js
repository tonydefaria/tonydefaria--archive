// Contact

// Data
import Hankyo from "../lib/hankyo"
// Layout
import Secondary from "../layouts/secondary"
// Built-in Components
import { motion } from "framer-motion"
// Components
import MetaComponent from "../components/meta_component"

export default function Contact({project, page, meta, networks}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="width-wide float-left"
    >
      <MetaComponent resource={project} meta={meta} />
      <div className="content">
        <div className="content-box">
          <div className="content-row">
            <h1 className="font-size-xxl">{page.title}</h1>
            <hr className="separator-xxs" />
            <div className="width-wide float-left" dangerouslySetInnerHTML={{ __html: page.description }} />
            <hr className="separator-s" />
            <p className="font-size-xl font-weight-700">{page.email}</p>
            <div className="vcard">
              <ul className="vcard-box list-style-none">
                {networks.map((network) => (
                  <li key={network.uid} className="vcard-item">
                    <a className="link-xs link-black hover-underline" rel="noreferrer noopener" href={network.network_url + network.username} target="_blank">{network.network}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export async function getStaticProps({locale}) {
  // Hankyo
  const project = Hankyo.data(locale).project
  const page = project.pages.find(({uid}) => uid === 9999)
  const meta = page.meta_component
  const networks = project.networks_component

  return {
    props: {
      project,
      page,
      meta,
      networks
    }
  }
}

Contact.Layout = Secondary
