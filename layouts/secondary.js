// Secondary

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

export default function Secondary({ children }) {
  // Get props
  const project = children.props.hankyoProject.project
  const social_networks = project.social_networks

  useEffect(() => {
    let preform
    const body = document.getElementsByTagName("body")[0];
    window.onresize = function() {
      clearTimeout(preform)
      preform = setTimeout(function() {
        body.classList.remove("lock-scroll")
      }, 250)
    }
  }, [])

  return (
    <div className="secondary">
      <FaviconComponent project={project} />
      <header className="universal header fixed-header">
        <BrandLogoComponent link_colour="link-black" />
        <MenuComponent />
      </header>
      <MenuMobileComponent />
      <div className="sticky-footer" id="sticky-footer">
        <main className="universal main">
          <div className="universal-box">
            <div className="universal-row">
              {children}
            </div>
          </div>
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
