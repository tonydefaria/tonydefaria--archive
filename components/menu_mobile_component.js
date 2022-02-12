// Menu Mobile Component

// Built-in components
import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
// Icons
import MenuIcon from "../icons/menu"

export default function MenuOverlayComponent() {
  const [isActive, setActive] = useState("false")

  // Toggle
  const handleToggle = (event) => {
    event.preventDefault()
    setActive(!isActive)
  }

  useEffect(() => {
    const body = document.getElementById("lock-scroll")
    if (!isActive) {
      body.classList.add("lock-scroll")
    } else {
      body.classList.remove("lock-scroll")
    }
  }, [isActive])

  return (
    <>
      <div className="menu-mobile-trigger">
        <ul className="menu-mobile-trigger-box">
          <li className="menu-mobile-trigger-item">
            <a href="#" rel="nofollow" onClick={handleToggle} aria-label="Menu Mobile Trigger" className={`link ${isActive ? "link-black" : "link-white"}`}>
            <div className="icon"><MenuIcon /></div>
            </a>
          </li>
        </ul>
      </div>
      <div onClick={handleToggle} className={`menu-mobile flex-h-center flex-v-center ${isActive ? "menu-mobile-hide" : "menu-mobile-show"}`} id="menu-mobile">
        <ul className="menu-mobile-box">
          <li className="menu-mobile-item">
            <Link href="/"><a className="link-l link-white">Home</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/portraits"><a className="link-l link-white">Portraits</a></Link>
          </li>
          <li className="menu-mobile-item">
            <Link href="/contact"><a className="link-l link-white">Contact</a></Link>
          </li>
        </ul>
      </div>
    </>
  )
}
