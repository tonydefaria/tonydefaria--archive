// Secondary

// Built-in Components
import { useEffect } from "react";
import Cookies from "js-cookie"
import TagManager from "react-gtm-module";

// Components
import BrandComponent from "../components/brand_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import MenuComponent from "../components/menu_component"
import NetworksComponent from "../components/networks_component"

export default function Secondary({ children }) {

  // Get Project
  const project = children.props.project

  // Hooks
  useEffect(() => {
    const cookie = Cookies.get("weLoveCookies")
    if (cookie === "iWantCookies") {
      TagManager.initialize({ gtmId: "GTM-PB6NJJW" })
    }
  }, []);

  return (
    <div>
      <FaviconComponent />
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <BrandComponent project={project} />
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
            <NetworksComponent link_colour="link-black" project={project} />
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
