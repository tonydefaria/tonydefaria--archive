// Galleries

// Data
import Hankyo from "../../lib/hankyo"

// Layout
import Tertiary from "../../layouts/tertiary"

// Built-in components
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import MetaComponent from "../../components/meta_component"
import BackComponent from "../../components/back_component"

export default function Galleries({project, gallery, meta, images}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.5}}}
      className="width-wide float-left"
    >
      <MetaComponent resource={gallery} meta={meta} />
      <div className="content">
        <div className="content-box flex-h-center">
          <div className="content-row content-3-2">
            <div className="content-left">
              <div className="width-wide float-left flex-h-center">
                <BackComponent anchor={`/street-and-travel/#${gallery.slug}`} link_colour="link-white" />
              </div>
              <h1 className="font-size-xxl text-align-center white-cl">{gallery.title}</h1>
              <hr className="separator-xxs" />
              <div className="width-wide float-left text-align-center white-cl" dangerouslySetInnerHTML={{ __html: gallery.description }} />
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <ul className="gallery-box">
          {images.map((image) => (
            <li key={image.uid} className="gallery-row">
              <div className="gallery-inner flex-h-center">
                <Image src={image.url} width={image.width} height={image.height} alt="Tony de Faria" title={project.image_title} className="border-corner" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export async function getStaticProps({locale}) {
  // Get Gallery
  const project = Hankyo.data(locale).project
  const gallery = await Hankyo.dataGallery00001(locale).gallery
  const meta = gallery.meta_component
  const images = gallery.images

  return {
    props: {
      project,
      gallery,
      meta,
      images
    }
  }
}

Galleries.Layout = Tertiary
