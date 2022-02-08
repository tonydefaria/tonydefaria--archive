// Primary

// Built-in Components
// import { useEffect, useCallback } from "react";
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
  const section = children.props.hankyoSection.section
  const hero = section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")
  const social_networks = project.social_networks

  return (
    <div className="primary keyvisual">
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
        <div className="universal-box">
          <div className="universal-row">
            <SocialNetworksComponent project={project} social_networks={social_networks} />
            <CopyrightComponent text_colour="white-cl" />
          </div>
        </div>
      </footer>

      <div className="width-wide flex-h-center">
        <CookiesComponent />
      </div>
      <style jsx>{`
        .keyvisual {
          background-image: url(${hero.image});
          background-position: bottom right;
          background-size: cover;
        }
      `}</style>
    </div>
  )
}
