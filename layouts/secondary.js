// Secondary

// Built-in Components
// import { useEffect } from "react";
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

  // Hooks
  // useEffect(() => {
  // }, []);

  return (
    <div className="secondary">
      <FaviconComponent project={project} />
      <header className="universal header fixed-header white-bg">
        <BrandLogoComponent link_colour="link-black" />
        <MenuComponent />
        <MenuMobileComponent />
      </header>

      <div className="sticky-footer">
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
            <CopyrightComponent text_colour="black-cl" />
          </div>
        </div>
      </footer>

      <div className="width-wide flex-h-center">
        <CookiesComponent />
      </div>
    </div>
  )
}
