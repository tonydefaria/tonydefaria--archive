// Primary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"
import smoothscroll from "smoothscroll-polyfill";
// import { motion } from "framer-motion"
// Components
// import CursorComponent from "../components/cursor_component"
import BrandLogoComponent from "../components/brand_logo_component"
// import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import MenuComponent from "../components/menu_component"
import MenuMobileComponent from "../components/menu_mobile_component"
import SocialNetworksPrimaryComponent from "../components/social_networks_primary_component"

export default function Primary({ children }) {
  // Get props
  const project = children.props.hankyoProject.project
  const social_networks = project.social_networks

  useEffect(() => {
    smoothscroll.polyfill();

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
    <div className="primary">
      <FaviconComponent project={project} />
      <header className="universal header fixed-header">
        <BrandLogoComponent link_colour="link-black" />
        <MenuComponent />
      </header>
      <MenuMobileComponent />
      <main className="universal main">
        {children}
      </main>
      <footer className="universal footer">
        <SocialNetworksPrimaryComponent social_networks={social_networks} />
        <CopyrightComponent text_colour="black-cl" />
      </footer>
      {/*
        <div className="width-wide flex-h-center">
          <CookiesComponent />
        </div>
      */}
      {/* <CursorComponent /> */}
    </div>
  )
}
