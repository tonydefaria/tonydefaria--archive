// Primary

// Built-in Components
import Head from "next/head"
import { useEffect } from "react";
import TagManager from "react-gtm-module";

// Components
import BrandComponent from "../components/brand_component"
import SocialNetworksComponent from "../components/social_networks_component"
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {
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
            <BrandComponent />
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
            <SocialNetworksComponent />
            <CopyrightComponent />
          </div>
        </div>
      </footer>
    </div>
  )
}
