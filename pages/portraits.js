// Portraits

// Layout
import Secondary from "../layouts/secondary"
// Built-in Components
import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, EffectFade} from "swiper"
// Components
import MetaComponent from "../components/meta_component"
// Icons
import CloseIcon from "../icons/close"

export default function Portraits({meta, hankyoProject, hankyoSection}) {
  const [isActive, setActive] = useState("false")

  // Cabin Event
  const trackOpenPortraitsGalleryCabin = (event) => {
    event.preventDefault()
    window.cabin.event("Portraits Gallery")
  }

  // Fathom Event
  const trackOpenPortraitsGalleryFathom = (event) => {
    event.preventDefault()
    window.fathom.trackGoal("HJHEPKKC", 0)
  }

  // Toggle
  const handleToggle = (event) => {
    event.preventDefault()
    setActive(!isActive)
  }

  const bindFunctions = (event) => {
    trackOpenPortraitsGalleryCabin(event)
    trackOpenPortraitsGalleryFathom(event)
    handleToggle(event)
  }

  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")
  const images = hankyoSection.section.blocks.filter(image => image.type_of === "image")

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
        {images.map((image) => (
          <link key={image.uid} rel="preload" as="image" href={image.image} />
        ))}
      </Head>
      <div className="hero top">
        <div className="hero-box half">
          <div className="hero-row">
            <figure className="loading">
              <Image src={hero.image} width={hero.width} height={hero.height} quality={100} alt="Hero Image" title="Tony de Faria" />
            </figure>
          </div>
        </div>
        <div className="hero-box half">
          <div className="hero-row">
            <h1 className="font-size-xxl">{hero.title}</h1>
            <hr className="separator-s" />
            <p className="font-size-xl" dangerouslySetInnerHTML={{__html: hero.description}} />
            <hr className="separator-s" />
            <a aria-label="Menu Trigger" href="#" rel="nofollow" onClick={bindFunctions} className="button-l button-black text-transform-uppercase font-weight-900">Open Gallery</a>
          </div>
        </div>
      </div>

      <div className={`overlay ${isActive ? "overlay-hide" : "overlay-show"}`}>
        <a href="#" rel="nofollow" onClick={handleToggle} aria-label="Menu Mobile Trigger" className="link link-black overlay-close">
          <div className="icon"><CloseIcon /></div>
        </a>
        <Swiper
          centeredSlides={true}
          className="swiper"
          effect={"fade"}
          // lazy={true}
          loop={true}
          initialSlide={0}
          keyboard={{ enabled: true }}
          modules={[Keyboard, EffectFade]}
          slidesPerView={"auto"}
        >
          {images.map((image) => (
            <SwiperSlide key={image.uid}>
              <div className="swiper-box flex-h-center flex-v-center">
                <figure className="loading">
                  <Image src={image.image} width={image.width} height={image.height} quality={75} alt="Gallery Image" title="Tony de Faria" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE"
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
