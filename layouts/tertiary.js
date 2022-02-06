// Tertiary

// Built-in Components
import { useEffect, useCallback } from "react";
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

  // Hooks
  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - -

  const resizeStickyFooter = useCallback(() => {
    const bodyHeight = document.getElementsByTagName("body")[0].clientHeight
    const footerHeight = document.getElementsByTagName("footer")[0].clientHeight
    const stickyFooterHeight = (bodyHeight - footerHeight)
    document.getElementById("sticky-footer").setAttribute("style","min-height:" + stickyFooterHeight + "px");
    console.log("Resizing Sticky Footer")
  }, []);

  useEffect(() => {
    resizeStickyFooter()
    window.addEventListener("resize", function(event) {
      resizeStickyFooter()
    }, true);
  }, [resizeStickyFooter]);

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

      <div className="sticky-footer" id="sticky-footer">
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
            <SocialNetworksComponent project={project} social_networks={social_networks} />
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
