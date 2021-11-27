// Street

// Data
import Hankyo from "../../lib/hankyo"

// Layout
import Secondary from "../../layouts/secondary"

// Built-in components
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../../components/meta_component"

// Icons
import ArrowRight from "../../icons/arrow_right";

// Assets
const coverBG = "/images/bg.jpg";

export default function Street({project, page, meta, galleries}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.5}}}
      className="width-wide float-left"
    >
      <MetaComponent resource={project} meta={meta} />
      <div className="cover">
        <div className="cover-box">
          <div className="cover-row">
            <div className="cover-left">
              <h1 className="font-size-xxl">{page.title}</h1>
              <hr className="separator-xxs" />
              <div className="width-wide float-left" dangerouslySetInnerHTML={{ __html: page.description }} />
            </div>
          </div>
        </div>
      </div>
      <hr className="separator-l" />
      <div className="gallery">
        <ul className="gallery-box">
          {galleries.map((gallery) => (
            <li key={gallery.uid} className="gallery-row" id={gallery.slug}>
              <div className="gallery-right flex-h-center flex-v-center">
                <Image src={gallery.cover} width="1024" height="819" alt="Tony de Faria" className="border-corner " />
              </div>
              <div className="gallery-left gallery-sticky">
                <h2 className="font-size-xl">{gallery.title}</h2>
                <hr className="separator-xs" />
                <div className="width-wide float-left" dangerouslySetInnerHTML={{ __html: gallery.description }} />
                <hr className="separator-xs" />
                <Link href={`/street-and-travel/${gallery.slug}`}>
                  <a className="link-s link-black">
                    <div className="icon float-right flex-v-center">
                      <ArrowRight />
                    </div>
                    Check it out
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .cover {
          background-image: url(${coverBG});
          background-position: bottom right;
          background-size: cover;
          border-radius: 4px;
        }
      `}</style>
    </motion.div>
  )
}

export async function getStaticProps({locale}) {
  // Hankyo
  const project = Hankyo.data(locale).project
  const page = project.pages.find(({uid}) => uid === 2)
  const meta = page.meta_component
  const galleries = Hankyo.dataGalleryIndex(locale).galleries

  return {
    props: {
      project,
      page,
      meta,
      galleries
    }
  }
}

Street.Layout = Secondary
