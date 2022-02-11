// Primary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"
// import { motion } from "framer-motion"
// Components
import BrandLogoComponent from "../components/brand_logo_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import MenuComponent from "../components/menu_component"
import MenuMobileComponent from "../components/menu_mobile_component"
import SocialNetworksComponent from "../components/social_networks_component"

export default function Primary({ children }) {
  // Get props
  const project = children.props.hankyoProject.project
  const social_networks = project.social_networks
  const [isActive, setActive] = useState("false")

  useEffect(() => {
    let preform
    const body = document.getElementsByTagName("body")[0]
    if (!isActive) {
      body.classList.add("lock-scroll")
    } else {
      body.classList.remove("lock-scroll")
    }
    window.onresize = function() {
      clearTimeout(preform)
      preform = setTimeout(function() {
        body.classList.remove("lock-scroll")
      }, 250)
    }
  }, [isActive])

  return (
    <div className="primary">
      <FaviconComponent project={project} />
      <header className="universal header fixed-header">
        <BrandLogoComponent link_colour="link-black" />
        <MenuComponent />
      </header>
      <MenuMobileComponent />
      <div className="sticky-footer" id="sticky-footer">
        <main className="universal main">
          {children}
        </main>
      </div>
      <footer className="universal footer">
        <SocialNetworksComponent project={project} social_networks={social_networks} />
        <CopyrightComponent text_colour="black-cl" />
      </footer>
      <div className="width-wide flex-h-center">
        <CookiesComponent />
      </div>
    </div>
  )
}
