// Portraits

// Layout
import Secondary from "../layouts/secondary"
// Built-in Components
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, EffectFade} from "swiper";

// Components
import MetaComponent from "../components/meta_component"

import portraitImg from '../public/test-portrait.png'
import landscapeImg from '../public/test-landscape.png'

export default function Portraits({meta, hankyoProject, hankyoSection}) {
  const [isActive, setActive] = useState("false")

  // Toggle
  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!isActive);
  };


  // Toggle
  const handleHeight = () => {
    document.getElementsByTagName("body")[0].clientHeight
  };

  const hero = hankyoSection.section.blocks.find(({uid}) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{opacity: {duration: 0.25}}}
      className="width-wide float-left"
    >
      <MetaComponent hankyoProject={hankyoProject} meta={meta} />
      <hr className="separator-m" />
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-size-xxl">{hero.title}</h1>
            <hr className="separator-s" />
            <p className="font-size-xl">{hero.description}</p>
            <hr className="separator-s" />
            <a aria-label="Menu Trigger" href="#" rel="nofollow" onClick={handleToggle} className={`button-s ${isActive ? "button-black" : "button-red"}`}>Open Gallery</a>
          </div>
        </div>
      </div>
      <div className={`overlay ${isActive ? "overlay-hide" : "overlay-show"}`}>
        <Swiper
          slidesPerView={"auto"}
          effect={"fade"}
          centeredSlides={true}
          keyboard={{ enabled: true }}
          loop={true}
          modules={[Keyboard, EffectFade]}
          initialSlide={0}
        >
          <SwiperSlide><div className="swiper-slide-inner flex-h-center flex-v-center"><Image alt="Tony de Faria" src={landscapeImg} width={896} height={718} quality={100}/></div></SwiperSlide>
          <SwiperSlide><div className="swiper-slide-inner flex-h-center flex-v-center"><Image alt="Tony de Faria" src={portraitImg} width={718} height={896} quality={100}/></div></SwiperSlide>
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
