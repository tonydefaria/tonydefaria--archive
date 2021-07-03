// Primary

// Built-in Components
import { useEffect } from "react";
import Cookies from "js-cookie"
import TagManager from "react-gtm-module";

// Components
import CookiesComponent from "../components/cookies_component"
import FaviconComponent from "../components/favicon_component"
import BrandComponent from "../components/brand_component"
import NetworksComponent from "../components/networks_component"
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {

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
          </div>
        </div>
      </header>

      <div className="sticky-footer flex-v-center">
        <main className="universal main hero" id="hero">
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
            <NetworksComponent project={project} />
            <CopyrightComponent />
          </div>
        </div>
      </footer>
      <CookiesComponent />
    </div>
  )
}
