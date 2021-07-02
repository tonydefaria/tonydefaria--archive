// Primary

// Built-in Components
import Head from "next/head"
import { useEffect } from "react";
import TagManager from "react-gtm-module";

// Components
import BrandComponent from "../components/brand_component"
import NetworksComponent from "../components/networks_component"
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {

  // Get Project
  const project = children.props.project

  // Hooks
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PB6NJJW" });
  }, []);

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
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
    </div>
  )
}
