// Cookies

import { useEffect } from "react"
import Cookies from "js-cookie"

export default function CookiesComponent() {

  // Hooks
  useEffect(() => {
    const cookie = Cookies.get("weLoveCookies")
    if (cookie !== "iWantCookies") {
      document.getElementsByClassName("cookies")[0].classList.add("show")
    } else {
      document.getElementsByClassName(
        "cookies",
        "cookies-box",
        "cookies-row"
      )[0].classList.add("hide")
    }
  }, [])

  // Handle consent
  function handleConsent(e) {
    e.preventDefault()
    // Set cookie
    Cookies.set("weLoveCookies", "iWantCookies")
    document.getElementsByClassName(
      "cookies",
      "cookies-box",
      "cookies-row"
    )[0].classList.add("hide")
  }

  return (
    <div className="cookies">
      <div className="cookies-box">
        <div className="cookies-row">
          <p className="white-cl text-align-center">Cookies allow us to deliver and improve our web content and provide you with a personalised experience. Our website uses cookies for these purposes.</p>
        </div>
        <div className="cookies-row flex-h-center">
          <a className="button-m button-white" onClick={handleConsent}>I am in</a>
        </div>
      </div>
      <style jsx>{`
        .show {
          display: block !important;
          visibility: visible !important;
        }
        .hide {
          display: none !important;
          visibility: hidden !important;
        }
      `}</style>
    </div>
  )
}
