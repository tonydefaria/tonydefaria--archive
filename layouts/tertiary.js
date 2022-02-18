// Tertiary

// Built-in Components
import React, { useState, useEffect, useCallback } from "react"
import smoothscroll from "smoothscroll-polyfill";
// Components
import BrandIconComponent from "../components/brand_icon_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import SocialNetworksComponent from "../components/social_networks_component"

export default function Tertiary({ children }) {
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
    <div className="tertiary">
      <FaviconComponent project={project} />
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row flex-h-center">
            <BrandIconComponent link_colour="link-white" />
          </div>
        </div>
      </header>
      <main className="universal main padding-0">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
      <footer className="universal footer">
        <SocialNetworksComponent project={project} social_networks={social_networks} />
        <CopyrightComponent text_colour="white-cl" />
      </footer>
      {/*
        <div className="width-wide flex-h-center">
          <CookiesComponent />
        </div>
      */}
    </div>
  )
}
