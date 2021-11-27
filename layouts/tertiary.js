// Tertiary

// Built-in Components
import { useEffect } from "react";
// Components
import BrandIconComponent from "../components/brand_icon_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import NetworksComponent from "../components/networks_component"

export default function Tertiary({ children }) {
  // Get Props
  const project = children.props.project
  const networks = project.networks_component

  // Hooks
  // useEffect(() => {
  // }, []);

  return (
    <div className="black-bg">
      <FaviconComponent project={project} />
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row flex-h-center">
            <BrandIconComponent link_colour="link-white" />
          </div>
        </div>
      </header>

      <div className="sticky-footer">
        <main className="universal main padding-0">
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
            <CopyrightComponent text_colour="white-cl" />
          </div>
        </div>
      </footer>
      <div className="width-wide flex-h-center">
        <CookiesComponent />
      </div>
    </div>
  )
}
