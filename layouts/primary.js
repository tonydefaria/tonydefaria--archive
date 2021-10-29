// Primary

// Built-in Components
import { useEffect } from "react";
import Cookies from "js-cookie"
import TagManager from "react-gtm-module";

const img = "/images/bg.jpg";

// Components
import BrandComponent from "../components/brand_component"
import CookiesComponent from "../components/cookies_component"
import CopyrightComponent from "../components/copyright_component"
import FaviconComponent from "../components/favicon_component"
import MenuComponent from "../components/menu_component"
import NetworksComponent from "../components/networks_component"

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
    <div className="keyvisual">
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
            <NetworksComponent link_colour="link-white" project={project} />
            <CopyrightComponent text_colour="white-cl" />
          </div>
        </div>
      </footer>
      <div className="width-wide flex-h-center">
        <CookiesComponent />
      </div>
      <style jsx>{`
        .keyvisual {
          background-image: url(${img});
          background-position: bottom right;
          background-size: cover;
          min-height: 100%;
          position: absolute;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
