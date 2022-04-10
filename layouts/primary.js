// Primary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"
import smoothscroll from "smoothscroll-polyfill";
// Components
import BrandComponent from "../components/brand_component"
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
        body.classList.add("scroll")
      }, 250)
    }
  }, [])

  return (
    <div className="primary">
      <FaviconComponent project={project} />
      <header className="universal header fixed-header">
        <BrandComponent link_colour="link-white" />
        {/* <MenuComponent /> */}
      </header>
      <MenuMobileComponent link_colour="link-black" bg_colour="white-bg" trigger_colour="link-white" trigger_colour_active="link-black" social_networks={social_networks} />
      <main className="universal main flex-v-center">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
      <footer className="universal footer">
        <SocialNetworksPrimaryComponent social_networks={social_networks} />
        <CopyrightComponent text_colour="white-cl" />
      </footer>
    </div>
  )
}
