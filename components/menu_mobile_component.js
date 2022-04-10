// Menu Mobile Component

// Built-in components
import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
// import SocialNetworksTertiaryComponent from "../components/social_networks_tertiary_component"

// Icons
import MenuIcon from "../icons/menu"
import CloseIcon from "../icons/close"

export default function MenuOverlayComponent({social_networks, trigger_colour, trigger_colour_active, link_colour, bg_colour}) {
  const [isActive, setActive] = useState(true)

  // Toggle
  const handleTriggerToggle = (event) => {
    event.preventDefault()
    setActive(!isActive)
  }

  // Toggle
  const handleToggle = (event) => {
    setActive(!isActive)
  }

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    if (!isActive) {
      body.classList.remove("scroll")
      body.classList.add("lock-scroll")
    } else {
      body.classList.remove("lock-scroll")
      body.classList.add("scroll")
    }
  }, [isActive])

  return (
    <>
      <div className="menu-mobile-trigger">
        <ul className="menu-mobile-trigger-box">
          <li className="menu-mobile-trigger-item">
            <a href="#" rel="nofollow" onClick={handleTriggerToggle} aria-label="Menu Mobile Trigger" className={`link ${isActive ? trigger_colour : trigger_colour_active}`}>
            <div className="icon">{isActive ? <MenuIcon /> : <CloseIcon />}</div>
            </a>
          </li>
        </ul>
      </div>
      <div className={`menu-mobile flex-h-center ${bg_colour} ${isActive ? "menu-mobile-hide" : "menu-mobile-show"}`} id="menu-mobile">
        <ul className="menu-mobile-box">
          <li className="menu-mobile-item">
            <Link href="/"><a onClick={handleToggle} className={`link-xxl ${link_colour}`}>Home</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/portraits"><a onClick={handleToggle} className={`link-xxl ${link_colour}`}>Portraits</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/contact"><a onClick={handleToggle} className={`link-xxl ${link_colour}`}>Contact</a></Link>
          </li>
          <hr className="separator-s" />
          {social_networks.map((social_network) => (
            <li key={social_network.uid} className="menu-mobile-item">
              <a href={social_network.url} target="_blank" rel="noreferrer noopener" className={`link-m ${link_colour}`}>{social_network.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
