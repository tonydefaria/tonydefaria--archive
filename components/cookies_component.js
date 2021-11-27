// Cookies

// Built-in Components
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
    Cookies.set("weLoveCookies", "iWantCookies", { sameSite: "None", secure: true })
    document.getElementsByClassName(
      "cookies",
      "cookies-box",
      "cookies-row"
    )[0].classList.add("hide")
    // window.location.reload();
  }

  return (
    <div className="cookies">
      <div className="cookies-box">
        <div className="cookies-item">
          <p className="font-size-xs white-cl">We use cookies to improve <br />your experience on our site.</p>
          <a href="#" className="button-s button-white pill" rel="nofollow" onClick={handleConsent}>Accept</a>
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
