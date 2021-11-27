// Secondary

// Built-in Components
import { useEffect } from "react";
// Components
import BrandLogoComponent from "../components/brand_logo_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import MenuComponent from "../components/menu_component"
import NetworksComponent from "../components/networks_component"

export default function Secondary({ children }) {
  // Get Props
  const project = children.props.project
  const networks = project.networks_component

  // Hooks
  // useEffect(() => {
  // }, []);

  return (
    <div>
      <FaviconComponent project={project} />
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <BrandLogoComponent link_colour="link-black" />
            <MenuComponent />
          </div>
        </div>
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
            <NetworksComponent project={project} networks={networks} />
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
