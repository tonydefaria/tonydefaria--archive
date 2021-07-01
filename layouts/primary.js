// Primary

// Built-in Components
import Head from "next/head"
import { useEffect } from "react";
import TagManager from "react-gtm-module";

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
      </header>

      <main className="universal main hero" id="hero">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>

      <footer className="universal footer">
      </footer>
    </div>
  )
}
